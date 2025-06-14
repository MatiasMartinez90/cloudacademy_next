terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    # Estos valores se configurarán al inicializar el backend
    bucket         = "terraform-state-bucket-vz26twi7"
    key            = "backend/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock-table"
  }
}

provider "aws" {
  region = "us-east-1"
}

# Lambda function para post-confirmation
resource "aws_lambda_function" "post_confirmation" {
  filename         = "../../lambda/postConfirmation.zip"
  function_name    = "PostConfirmationFn"
  role            = aws_iam_role.lambda_role.arn
  handler         = "postConfirmation.handler"
  runtime         = "nodejs18.x"
  source_code_hash = filebase64sha256("../../lambda/postConfirmation.zip")
}

# IAM role para Lambda
resource "aws_iam_role" "lambda_role" {
  name = "post_confirmation_lambda_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

# Política IAM para que Lambda pueda escribir logs
resource "aws_iam_role_policy_attachment" "lambda_logs" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# Cognito User Pool - Configuración equivalente al CDK
resource "aws_cognito_user_pool" "user_pool" {
  name = "UserPool"

  # Equivalent to selfSignUpEnabled: true in CDK
  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }

  # Usar email como username
  username_attributes = ["email"]

  # Auto-verify email addresses
  auto_verified_attributes = ["email"]

  # Email configuration
  email_configuration {
    email_sending_account = "COGNITO_DEFAULT"
  }

  # Password policy (CDK uses defaults, but good to be explicit)
  password_policy {
    minimum_length    = 8
    require_lowercase = false
    require_numbers   = false
    require_symbols   = false
    require_uppercase = false
  }

  # Lambda triggers - equivalent to lambdaTriggers in CDK
  lambda_config {
    post_confirmation = aws_lambda_function.post_confirmation.arn
  }

  # Email attribute schema (CDK adds this automatically)
  schema {
    attribute_data_type      = "String"
    developer_only_attribute = false
    mutable                  = true
    name                     = "email"
    required                 = true

    string_attribute_constraints {
      min_length = 7   # Minimum for email format
      max_length = 256
    }
  }
}

# Permiso para que Cognito invoque la función Lambda
resource "aws_lambda_permission" "cognito_invoke_lambda" {
  statement_id  = "AllowExecutionFromCognito"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.post_confirmation.function_name
  principal     = "cognito-idp.amazonaws.com"
  source_arn    = aws_cognito_user_pool.user_pool.arn
}

# Google Identity Provider para Cognito
resource "aws_cognito_identity_provider" "google" {
  user_pool_id  = aws_cognito_user_pool.user_pool.id
  provider_name = "Google"
  provider_type = "Google"

  provider_details = {
    client_id        = var.google_client_id
    client_secret    = var.google_client_secret
    authorize_scopes = "email openid profile"
  }

  attribute_mapping = {
    email    = "email"
    username = "sub"
    name     = "name"
  }
}

# Cognito User Pool Domain para OAuth
resource "aws_cognito_user_pool_domain" "user_pool_domain" {
  domain       = "cloudacademy-auth-${random_string.domain_suffix.result}"
  user_pool_id = aws_cognito_user_pool.user_pool.id
}

# Random string para hacer único el dominio
resource "random_string" "domain_suffix" {
  length  = 8
  special = false
  upper   = false
}

# Cognito User Pool Client - Configuración para OAuth con Google
resource "aws_cognito_user_pool_client" "user_pool_client" {
  name         = "UserPoolClient"
  user_pool_id = aws_cognito_user_pool.user_pool.id

  # OAuth flows para Google authentication
  explicit_auth_flows = [
    "ALLOW_USER_SRP_AUTH",
    "ALLOW_REFRESH_TOKEN_AUTH"
  ]

  # OAuth configuration
  allowed_oauth_flows_user_pool_client = true
  allowed_oauth_flows                 = ["code"]
  allowed_oauth_scopes               = ["email", "openid", "profile"]
  
  # Callback URLs para la aplicación
  callback_urls = [
    "https://${aws_cognito_user_pool_domain.user_pool_domain.domain}.auth.us-east-1.amazoncognito.com/oauth2/idpresponse",
    "http://localhost:3000",  # Para desarrollo local
    var.production_callback_url  # URL de producción
  ]
  
  logout_urls = [
    "http://localhost:3000",
    var.production_logout_url
  ]

  # Supported identity providers
  supported_identity_providers = ["Google"]

  # Token validity - equivalent to CDK Duration.days()
  access_token_validity  = 24   # 24 hours = 1 day
  id_token_validity     = 24   # 24 hours = 1 day  
  refresh_token_validity = 720  # 720 hours = 30 days

  # Prevent user existence errors
  prevent_user_existence_errors = "ENABLED"

  # No client secret for public client
  generate_secret = false

  depends_on = [aws_cognito_identity_provider.google]
}

# Outputs - equivalente a CfnOutput en CDK
output "cognito_user_pool_id" {
  description = "Cognito User Pool ID"
  value       = aws_cognito_user_pool.user_pool.id
}

output "cognito_user_pool_web_client_id" {
  description = "Cognito User Pool Web Client ID"
  value       = aws_cognito_user_pool_client.user_pool_client.id
}

output "cognito_user_pool_domain" {
  description = "Cognito User Pool Domain for OAuth"
  value       = aws_cognito_user_pool_domain.user_pool_domain.domain
}

output "google_identity_provider_name" {
  description = "Google Identity Provider Name"
  value       = aws_cognito_identity_provider.google.provider_name
}
