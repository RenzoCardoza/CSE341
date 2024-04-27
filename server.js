const express = require("express")
const app = express()
const env = require("dotenv").config()

const port = process.env.PORT || 3000

app.use("/", require("./routes"))

app.listen(port, () => {console.log(`Running on Port:${port}`)})