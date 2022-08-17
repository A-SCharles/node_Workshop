require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = parseInt(process.env.PORT)
const bodyparser = require('body-parser')
const db = require("./config/dbcon")

app.set("port", port || 4000)

app.use(express.json(), cors(), express.static('public'))

app.listen(port, () => {
console.log(`Server running on http://localhost:${port}`)
})

app.get('/', (req, res) => {
    console.log("object");
    res.sendFile(__dirname + "/public/index.html")
})

const animesRoute = require("./routes/animesRoute.js")
app.use("/animes", animesRoute)

