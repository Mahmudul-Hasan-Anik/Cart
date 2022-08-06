const express = require('express')
const multer  = require('multer')
const path = require('path')
const ProfileGet = require('../Controller/ProfileGetController')
const ProfileImageUpload = require('../Controller/ProfileImageController')

const SignInAuth = require('../Controller/SignInController')
const SignUpAuth = require('../Controller/SignUpController')

const AuthRouter = express.Router()


const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, 'uploads')
    },
    filename: (req, file, cb)=>{
      const fileExt = path.extname(file.originalname)
      const fileName = file.originalname
                       .replace(fileExt, '')
                       .split(' ')
                       .join('-') + Date.now()
  
      cb(null, fileName + fileExt)
    }
  })

const upload = multer({ 
    storage: storage,
    limits: {
      fieldSize: 2000000 
    },
    fileFilter: (req, file, cb)=>{
        if(file.fieldname === "image"){

            if(
               file.mimetype == 'image/jpeg' ||
               file.mimetype == 'image/jpg'  ||
               file.mimetype == 'image/png'
              ){
                cb(null, true)
              }else{
                cb(new Error('Only jpeg, jpg and png allowed'))
              }
        }else{
            if(
                file.mimetype == 'application/pdf'
            ){
                cb(null, true)
            }else{
                cb(new Error('Only pdf file allowed'))
            }
        }
    }
})

AuthRouter.post('/signup', SignUpAuth)
AuthRouter.post('/signin', SignInAuth)
AuthRouter.get('/profile/:email', ProfileGet)
AuthRouter.patch('/uploadImage/:id',upload.single('image'),ProfileImageUpload)

module.exports = AuthRouter