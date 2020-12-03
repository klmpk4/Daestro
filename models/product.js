const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema ({

        title: {
            type : string,
            required : true
        }, 
        price: {
            type : number,
            required : true
        }, 
        image: {
            type : string
        }, 
        category: {
            type : string,
            required : true
        }   
})

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;