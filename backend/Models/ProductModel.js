const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductSchme = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique : true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    coupon: {
        type: String,
    },
    discount: {
        type: Number,

    },
    description: {
        type: String,
        required: true
    },
},
{
    timestamps: true
})

const Product = mongoose.model('Product', ProductSchme)
module.exports = Product
