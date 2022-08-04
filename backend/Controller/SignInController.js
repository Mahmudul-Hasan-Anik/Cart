const Authentication = require('../Models/AuthModel.js')
const bcrypt = require('bcrypt');

const SignInAuth = async(req,res)=>{
    const auth = await Authentication.findOne({email: req.body.email})

    if(auth){
        if(bcrypt.compareSync(req.body.password, auth.password)){
            res.send({
                _id: auth._id,
                email: auth.email,
                name: auth.name
            })
            return
        }
    }
   res.status(200).json({msg:'Login Successful'})
}

module.exports = SignInAuth