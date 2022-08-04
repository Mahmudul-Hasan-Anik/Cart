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
    },
    userName: {
        type: String
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Authentication'
    },
    like: {
        type: Array
    },
    comment: {
        type: Array
    }
},
{
    timestamps: true
})

const post = mongoose.model('post', PostSchema)
module.exports = post 