const Authentication = require('../Models/AuthModel.js')

const ProfileGet = (req,res)=>{
    Authentication.findOne({email: req.params.email}, (err,docs)=>{
        if(docs){
            res.send(docs)
        }else(
            res.send(err)
        )
    })
}

module.exports = ProfileGet