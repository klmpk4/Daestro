const mongoose = require('mongoose')
const mongopath = 'mongodb+srv://adelataniaaa:kelompok4@cluster0.w0g5p.mongodb.net/daestro?retryWrites=true&w=majority'
const state = {
    product: [
        { 
            id: '1', 
            name: 'Waist Bag', 
            price: '179.999', 
            image: 'Chain-detail Waist Bag - Light Brown', 
            color: 'Brown', 
            category: 'Bag', 
        },
        { 
            id: '2', 
            name: 'Cotton Bag', 
            price: '49.999', 
            image: 'Cotton Canvas Bag - Natural White', 
            color: 'White', 
            category: 'Bag',
        },
        { 
            id: '3', 
            name: 'Shopper Bag', 
            price: '149.999', 
            image: 'Shopper Bag - Black', 
            color: 'Black', 
            category: 'Bag',
        },
        { 
            id: '4', 
            name: 'Shoulder Bag', 
            price: '129.999', 
            image: 'Suede-detail Shoulder Bag - Greige', 
            color: 'Greige', 
            category: 'Bag',
        },
        {
            id: '5',
            name: 'Denim Hoodie',
            price: '349.999',
            image: '',
            color: 'Denim',
            category: 'Hoodie',
        },
        {
            id: '6',
            name: 'Rib-Knit Hoodie',
            price: '399.999',
            image: '',
            color: 'White',
            category: 'Hoodie',
        },
        {
            id: '7',
            name: 'Printed Hoodie',
            price: '399.999',
            image: '',
            color: 'Beige',
            category: 'Hoodie',
        },
        {
            id: '8',
            name: 'Cotton Hoodie',
            price: '',
            image: '',
            color: '',
            category: '',
        },


    ]
}
const reqString = {
    type: String,
    required: true
}
mongoose.connect(mongopath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected');
})

const userSchema = mongoose.Schema({
        name: reqString,
        price: reqString,
        image: reqString,
        color: reqString,
        category: reqString,
},
{
    versionKey:false
})

const User = mongoose.model('Produk', userSchema);

User.create(
    { 
        name: '', 
        price: '', 
        image: '', 
        color: '', 
        category: '',  
    }, 
    (error,savedDocument) => {
        if (error) console.log(error);
        console.log(savedDocument)
    }
)
/*
{ 
        name: 'Waist Bag', 
        price: '179999', 
        image: 'Chain-detail Waist Bag - Light Brown.jpg', 
        color: 'Brown', 
        category: 'Bag', 
    }, 
    { 
        name: 'Cotton Bag', 
        price: '49999', 
        image: 'Cotton Canvas Bag - Natural White.jpg', 
        color: 'White', 
        category: 'Bag',
    },
    {  
        name: 'Shopper Bag', 
        price: '149999', 
        image: 'Shopper Bag - Black.jpg', 
        color: 'Black', 
        category: 'Bag',
    },
    { 
        name: 'Shoulder Bag', 
        price: '129999', 
        image: 'Suede-detail Shoulder Bag - Greige.jpg', 
        color: 'Greige', 
        category: 'Bag',
    },
    {
        name: 'Denim Hoodie',
        price: '349999',
        image: 'Hooded Denim hoodie.jpg',
        color: 'Denim',
        category: 'Hoodie',
    },
    {
        name: 'Rib-Knit Hoodie',
        price: '399999',
        image: 'Rib-knit White Hoodie.jpg',
        color: 'White',
        category: 'Hoodie',
    },
    {
        name: 'Printed Hoodie',
        price: '399999',
        image: 'NASA Stars Printed Hoodie.jpg',
        color: 'Beige',
        category: 'Hoodie',
    },
    {
        name: 'Cotton Hoodie',
        price: '229999',
        image: 'Black Relaxed Fit Hoodie.jpg',
        color: 'Black',
        category: 'Hoodie',
    },
    {
        name: 'V-Neck Shirt',
        price: '129999',
        image: 'New!V-neck Shirt - White.jpg',
        color: 'White',
        category: 'Shirt',
    },
    {
        name: 'Pattern Shirt',
        price: '199999',
        image: 'New!Patterned Resort Shirt - Dark Blue White Striped.jpg',
        color: 'White',
        category: 'Shirt',
    },
    {
        name: 'Cotton Shirt',
        price: '129999',
        image: 'New!Airy Cotton Shirt - Light Yellow.jpg',
        color: 'Yellow',
        category: 'Shirt',
    },
    {
        name: 'Twill Shacket',
        price: '249999',
        image: 'New!Cotton Twill Shacket - Dark Khaki Green.jpg',
        color: 'Dark Brown',
        category: 'Shirt',
    },
*/