const mongoose = require('mongoose')
const {Schema} = mongoose

const AuthSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
})

const Authentication = mongoose.model('Authentication', AuthSchema)
module.exports = Authentication