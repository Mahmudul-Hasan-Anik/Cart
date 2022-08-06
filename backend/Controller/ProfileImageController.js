const Authentication = require('../Models/AuthModel.js')

const ProfileImageUpload = (req,res)=>{
    const URL = req.protocol + '://' + req.get('host')
    const fileURL = URL + "/upload/" + req.file.filename;

    const updateValues = {
        image: fileURL
    }

     Authentication.findByIdAndUpdate({_id: req.params.id}, updateValues, {new: true}, (err,docs)=>{
        if(err){
            res.send(err)
        }else{
            res.send(docs)
        }
    })

    console.log(req.file)
}


module.exports = ProfileImageUpload