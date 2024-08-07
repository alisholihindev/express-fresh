import bodyParser from 'body-parser'
import express, { Application } from 'express'
import { routes } from './routes/routes'
import { logger } from './utils/logger'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import 'dotenv/config'

const app: Application = express()
const port: Number = 4000
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express Fresh",
      version: "1.0.0"
    }
  },
  apis: ["./src/controllers/*.ts","./src/models/*.ts"]
}
// console.log(options.defintion)

const swaggerDoc = swaggerJSDoc(options)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
// parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors access handler

app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

routes(app)

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`)
})
