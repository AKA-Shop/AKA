const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: {type:String},
    description: {type:String},
    price: {type:Number},
    color: {type:Array},
    size: {type:Array},
    gender: {type:String},
    categorie: {type:String,enum:['Men','Women','kids','Premature Baby','Shoes','Accessories']},
   
    brand: {type:String,enum:['Louis Vuitton','Chanel','Hermes','Gucci']},
    closeView: {type:String},
    fullView: {type:String},
    withoutModel: {type:String},
    
  })
  );

module.exports = Product;
