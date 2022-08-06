const post = require('../Models/PostModel.js')

const BlogLike = async(req,res)=>{
    const LikeInformation = {
        LikerName: req.body.LikerName,
        LikerID: req.body.LikerID
    }
    
    post.findByIdAndUpdate({_id: req.params.id}, { $push: {like: LikeInformation} },{new: true}, (err,docs)=>{
        if(docs){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
}

module.exports = BlogLike
