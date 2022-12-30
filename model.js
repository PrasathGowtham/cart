const mongoose =require("mongoose")


const ProductSchema =mongoose.Schema({
    productname:{type:String},
    productimage:{type:String},
    quantity:{type:Number},
    price:{type:Number},
  stock:{type:String},
})

const Cart = mongoose.model('Cart',ProductSchema)
module.exports=Cart;