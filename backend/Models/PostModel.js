const mongoose = require('mongoose')
const {Schema} = mongoose

const PostSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    time: {
        type: Date
    },
    image: {
        type: String
    },
    video: {
        type: String
    },
    document: {
        type: String
    }
},
{
    timestamps: true
})

const post = mongoose.model('post', PostSchema)
module.exports = post 