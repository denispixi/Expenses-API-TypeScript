## API para app personal de gastos V2

Api GraphQL para aplicación móvil personal de gastos V2.

### Tecnologías usadas:

- Node.js
- TypeScript
- Apollo Server (variante AWS Lambda)
- Type-GraphQL
- MongoDB - Mongoose
- Cognito

La API estará alojada en una función Lambda en AWS y sera expuesta mediante API Gateway.

Ejemplo de customConfig.yml:

```yaml
profile: <AWS Profile>
env:
  MONGODB_URI: "<MongoDB connection URI>"
layers:
  common_libraries: "<AWS Layer ARN with the dependencies>"
serverless-offline:
  # httpPort: 4000 # `httpPort` is for v6
  port: 4000 # `port` is for v5
```