# CloudAcademy Next.js Project - Context

## Configuración del Proyecto
- **Framework**: Next.js con TypeScript
- **Styling**: Tailwind CSS v4
- **Auth**: AWS Amplify con Cognito
- **Deployment**: GitHub Actions

## Arquitectura de Páginas
- `/` - Home estilo Platzi con grid de cursos
- `/admin` - Dashboard con autenticación 
- `/bedrock` - Curso interactivo de RAG con Amazon Bedrock
- `/signin` - Página de login

## Configuraciones Importantes

### Tailwind CSS v4
```js
// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### AWS Amplify Auth
```tsx
// _app.tsx
Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: env.cognitoUserPoolId,
    userPoolWebClientId: env.cognitoUserPoolWebClientId,
  },
})
```

## Comandos de Build
```bash
npm run build     # Construir proyecto
npm run dev       # Desarrollo local
```

## Problemas Resueltos
1. **Tailwind CSS no cargaba**: Migración a v4 con plugin correcto
2. **Auth fallaba**: Faltaba configuración de región AWS
3. **TypeScript errors**: Tipado correcto de estado React
4. **ESLint errors**: Escape de caracteres especiales en JSX

## Diseño
- Tema oscuro con gradientes azul/slate
- Estilo similar a Platzi para el home
- Diseño responsive con grids
- Componentes interactivos con estados React