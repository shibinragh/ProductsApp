const Product = require('../models/product.model');

exports.test = function (req, res){
    res.send('Greetings from the Test controller!')
}


exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function(req, res){
    Product.findById(req.params.id, function(err,product){
        if (err) return next(err)
        res.send(product);
    })
};

exports.product_update = (req, res) =>{
    Product.findByIdAndUpdate(req.params.id,{ $set: req.body}, function(err, product){
        if(err) return next(err);
        res.send('Product udpated.');
    })
};

exports.product_update_anyitem = (req, res) =>{
    Product.findOneAndUpdate('Banana4', { $set: {name: req.body.name, price: req.body.price } }, function(err, product){
        if(err) return next(err);
        res.send('Product updated.'); 
    })
}
exports.product_update_specific = (req, res) =>{
    Product.update({name: 'Banana'}, { $set: {name: req.body.name, price: req.body.price } }, function(err, product){
        if(err) return next(err);
        res.send('Product updated.'); 
    })
}
exports.product_delete = (req, res) =>{
    Product.findByIdAndRemove(req.params.id, function(err){
        if(err) return next(err);
        res.send('Product Deleted.'); 
    })
};

/*
 -- findOneAndUpdate = find matching name and update
 -- update = focus object name and update
*/