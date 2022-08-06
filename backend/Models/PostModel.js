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
    like: [
        {
           LikerName: {
            type: String
           },
           LikerID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Authentication'
           }
        }
    ],
    comments: [
        {
            comment: {
                type: String
            },
            whoComment: {
               type: String
            }
        }
    ]
},
{
    timestamps: true
})

const post = mongoose.model('post', PostSchema)
module.exports = post 