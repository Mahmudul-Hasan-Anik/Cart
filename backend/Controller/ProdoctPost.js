const Product = require('../Models/ProductModel')

const productPost = (req, res) => {
        const URL = req.protocol + '://' + req.get('host')
        const fileUrl = URL + "/upload/" + req.file.filename;
      
      
        const newProduct = new Product({
          name: req.body.name,
          slug: req.body.slug,
          price: req.body.price,
          stock: req.body.stock,
          catagory: req.body.catagory,
          image: fileUrl,
          coupon: req.body.coupon,
          discount: req.body.discount,
          description: req.body.description
        })
      
         newProduct.save()
        .then(()=>{
          res.status(200).json({msg:'Product Creation Successful'})
        }).catch(()=>{
          res.status(400).json({msg:'Product Creation Failed'})
        })
      
}

module.exports = productPost