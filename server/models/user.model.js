const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {type:Number,required:true },
    email: {type:Number,required:true },
    password: {type:Number,required:true },
    balance:{type:Number,default:0},
    image : {type:Number,default:"https://res.cloudinary.com/dugewmeeh/image/upload/v1670743970/mawi%20cuisine/blank-profile-picture-973460_1280_pgdqwd.png"},
   
  })
);

module.exports = User;