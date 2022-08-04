const e = require('express')
const express = require('express')
const multer  = require('multer')
const path = require('path')

const blogGet = require('../Controller/GetController')
const blogPost = require('../Controller/PostController')
const PostRouter = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        if(file.fieldname === "image"){
            cb(null, 'uploads')
        }else{
            cb(null, 'uploads/pdf')
        }
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


PostRouter.post("/post",upload.fields([{ name: 'image', maxCount: 1 }, { name: 'document', maxCount: 1 }]), blogPost);

PostRouter.get('/post/show', blogGet)

module.exports = PostRouter