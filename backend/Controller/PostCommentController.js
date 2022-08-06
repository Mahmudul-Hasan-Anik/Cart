const post = require('../Models/PostModel.js')

const BlogComment = (req, res)=>{

    const commentValue = {
        comment: req.body.comment,
        whoComment: req.body.whoComment
    }

    post.findByIdAndUpdate({_id: req.params.id}, {$push : {comments: commentValue}}, {new: true}, (err,docs)=>{
        if(docs){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
    console.log(req.params)
}

module.exports = BlogComment