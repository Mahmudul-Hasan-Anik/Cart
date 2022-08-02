const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const path = require('path')
dotenv.config()

//INTERNAL IMPORT
const connect = require('./Database/DBconnection.js')
const ProductRouter = require('./Routes/ProductRoute.js')

// DATABASE
connect()

// parse application/x-www-form-urlencoded
app.use("/upload", express.static(path.join(__dirname, "uploads"))); 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/dashboard/api', ProductRouter)


app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = process.env.PORT || 5000

app.listen(port, ()=>{
  console.log(`server running port : ${port}`)
})