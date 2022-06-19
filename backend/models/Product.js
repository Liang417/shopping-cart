const mongoose = require('mongoose');

const productScheme = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    items:{
        type:Number,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    },
})

const product = mongoose.model('product',productScheme);

module.exports = product;