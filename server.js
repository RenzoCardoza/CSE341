const express = require("express")
const app = express()
const env = require("dotenv").config()
const mongodb = require('./data/database')

const port = process.env.PORT || 3000

app.use("/", require("./routes"))

mongodb.initDb((err) =>{
    if(err){
        console.log(err)
    } else {
        app.listen(port, () => {console.log(`Database listening and running on Port:${port}`)})
    }
})