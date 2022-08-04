const Authentication = require('../Models/AuthModel.js')
const bcrypt = require('bcrypt');

const SignUpAuth = (req,res)=>{
    const newSignUpAuth = new Authentication({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })

    newSignUpAuth.save()
    .then(()=>{
        res.status(200).json({msg:'Registration Successful'})
    }).catch(()=>{
        res.status(400).json({msg:'Registration Failed'})
    })
}

module.exports = SignUpAuth