const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId, ref : 'User'
    },
    cart: {
        type: Object,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Order", orderSchema);
