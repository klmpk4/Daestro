const mongoose = require ('mongoose');
const Product = require ('../models/product');

mongoose.connect('mongodb+srv://adelataniaaa:kelompok4@cluster0.w0g5p.mongodb.net/daestro?retryWrites=true&w=majority');

const products = [
    new Product({
        imagePath: 'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/zoom/d7110614f03752de1e62e40f6ea7fa5228c042dc_xxl-1.jpg',
        name: 'Waist Bag',
        color: 'Brown',
        price: 179999
    }),
    new Product({
        imagePath: 'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/zoom/c10312984e1d80347f3a4ed95cd5643a44bf6318_xxl-1.jpg',
        name: 'Cotton Canvas Bag',
        color: 'White',
        price: 49999
    }),
    new Product({
        imagePath: 'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/152cf4de995f3d0b42779f0dbc4c7d3ef2612907_xxl-1.jpg',
        name: 'Shopper Bag',
        color: 'Black',
        price: 149999
    }),
    new Product({
        imagePath: 'https://hm-media-prod.s3.amazonaws.com/pub/media/catalog/product/medium/6c9d5e75f92f6328bc6a69e8f8a8ea0064e921a5_xxl-1.jpg',
        name: 'Suede Shoulder Bag',
        color: 'Greige',
        price: 129999
    }),
    new Product ({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F21%2F4d%2F214d9765f510970fa8e5b082f120c76503fab1ca.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
        name: 'Cotton Hoodie',
        color: 'Black',
        price: 229999
    }),
    new Product({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6c%2Fdb%2F6cdb78934868feb12fa19b3d8f9aaf10c952cd62.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
        name: 'Denim Hoodie',
        color: 'Blue',
        price: 349999
    }),
    new Product({
        imagePath: 'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/zoom/69cd4fcbab5cfd78ed0e99b730ba7b630f56f3da_xxl-1.jpg',
        name: 'Printed Hoodie',
        color: 'Beige',
        price: 399999
    }),
    new Product({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9b%2F42%2F9b4205467077207e1c317ab747a3a97b4d047f9d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_jumpers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
        name: 'Rib-Knit Hoodie',
        color: 'White',
        price: 399999
    }),
    new Product({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F39%2F33%2F39335e0e065aeab49b1fe5bea89ed980bbb5c7e4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_chinosslacks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
        name: 'Ankle Length Slacks',
        color: 'Black',
        price: 99999
    }),
    new Product({
        imagePath: 'https://static.hm.com.cn/media/catalog/product/cache/b803d092cb8aca177cbc8719d1bd817c/1/4/14a70d630f9c5226e0dcc2ecbc2469edf8858d0a.jpg',
        name: 'Cotton Legging',
        color: 'Grey',
        price: 99999
    }),
    new Product({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F04%2F23%2F04236cd737c39f777acb2691959bad2bb9247fdb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
        name: 'Plaid Twill Pants',
        color: 'Red',
        price: 149999
    }),
    new Product({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb9%2F97%2Fb997a41e9868431a80f0be636759d15e0f42a107.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
        name: 'Wide-Cut Jeans',
        color: 'Blue',
        price: 299999
    }),
    new Product({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fea%2F2b%2Fea2bb9c382776a2edc06efecc245543e35cb91c4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_shirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
        name: 'Airy Cotton Shirt',
        color: 'yellow',
        price: 129999
    }),
    new Product({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F25%2F40%2F2540441f122e295b2513a1ffab20304566c2278d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main',
        name: 'Twill Shacket',
        color: 'Dark Brown',
        price: 249999
    }),
    new Product({
        imagePath: 'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/59346014cdf7cae43317510730376e2310605e09_xxl-1.jpg',
        name: 'Pattern Shirt',
        color: 'White',
        price: 179999
    }),
    new Product ({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff0%2F30%2Ff0306c33019139f449dcec93265dbb2d74a690a0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_blouses%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
        name: 'V-Neck Shirt',
        color: 'White',
        price: 129999
    }),
    new Product({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd7%2F68%2Fd768e9aa899dfd08000ddb7f0170e7295f151b2a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_printed_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
        name: 'Printed T-Shirt',
        color: 'White',
        price: 99999
    }),
    new Product({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F87%2Ff6%2F87f62c8775d15e56ed2773febf0c38e177c65d3e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
        name: 'Cotton T-Shirt',
        color: 'Cream',
        price: 49999
    }),
    new Product({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F67%2F67%2F67677c7b73a435cc6a8852ef2bbbc048404bb272.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
        name: 'Jersey T-Shirt',
        color: 'Black',
        price: 89999
    }),
    new Product({
        imagePath: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb3%2F23%2Fb3236fdd169489841f31f8e83b0b2ba0650a044e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_sport%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
        name: 'Sports Top',
        color: 'Black',
        price: 149999
    })
];

var done = 0;
for(var i=0; i<products.length; i++) {
    products[i].save(function (err,result) {
        done++;
        if(done === products.length){
            console.log('saved');
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
};