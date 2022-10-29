import type { Application } from "express"
import express from "express"
import cors from "cors"

import { routes } from "./routes"
import { errorHandler } from "./middleware/errorHandler"

const PORT = process.env.PORT || 3333
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)
app.use(errorHandler)

app.listen(PORT)
