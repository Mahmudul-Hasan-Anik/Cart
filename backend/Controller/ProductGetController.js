const Product = require('../Models/ProductModel')

const ProductGet = (req,res)=>{
    Product.find({}, (err,docs)=>{
        if(docs){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
}

module.exports = ProductGet