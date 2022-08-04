const express = require('express')
const multer  = require('multer')
const path = require('path')
const productPost = require('../Controller/ProdoctPostController.js')
const ProductGet = require('../Controller/ProductGetController.js')

const ProductRouter = express.Router()

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
      if(
         file.mimetype == 'image/jpeg' ||
         file.mimetype == 'image/jpg'  ||
         file.mimetype == 'image/png'
        ){
          cb(null, true)
        }else{
          cb(new Error('Only jpeg, jpg and png allowed'))
        }
    }
})


ProductRouter.post("/product",upload.single('image'), productPost);
ProductRouter.get("/product/show", ProductGet);


module.exports = ProductRouter
