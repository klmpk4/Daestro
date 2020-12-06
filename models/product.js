const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema ({

        title: {
            type : String,
            required : true
        }, 
        price: {
            type : Number,
            required : true
        }, 
        image: {
            type : String,
        }, 
        category: {
            type : String,
            required : true
        }   
})

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;