/// checking for swagger http://localhost:3000/api-docs/#/



const express = require("express") 
const swaggerUI = require("swagger-ui-express")
const YAML = require("yamljs")
const swaggerJsDocs = YAML.load("./api.yaml")

const app  = express()
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerJsDocs))

app.use(express.json())
const {knex} = require("./connection/db.js")
// const { router } = require("./routers/rou.js")

const router = require("./routers/rou")

app.use("/",router)

app.listen(3000 , () => {
    console.log("server running on port 3000.")
})