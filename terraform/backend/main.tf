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
  handler         = "index.handler"
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

  # Equivalent to signInAliases: { email: true } in CDK
  alias_attributes = ["email"]

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

  # Username configuration to allow email as username
  username_configuration {
    case_sensitive = false
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

# Cognito User Pool Client - Configuración equivalente al CDK
resource "aws_cognito_user_pool_client" "user_pool_client" {
  name         = "UserPoolClient"
  user_pool_id = aws_cognito_user_pool.user_pool.id

  # Equivalent to authFlows: { userPassword: true, userSrp: true } in CDK
  explicit_auth_flows = [
    "ALLOW_USER_PASSWORD_AUTH",
    "ALLOW_USER_SRP_AUTH",
    "ALLOW_REFRESH_TOKEN_AUTH"  # This is needed for refresh tokens to work
  ]

  # Token validity - equivalent to CDK Duration.days()
  # Note: Values are in hours by default in Terraform AWS provider
  access_token_validity  = 24   # 24 hours = 1 day
  id_token_validity     = 24   # 24 hours = 1 day  
  refresh_token_validity = 720  # 720 hours = 30 days

  # Prevent user existence errors
  prevent_user_existence_errors = "ENABLED"

  # Enable SRP authentication
  generate_secret = false
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
