const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connect = ()=>{
    mongoose.connect(process.env.MONGO_CONNECTION, ()=>{
        console.log('Database Connected')
    })
}

module.exports = connect