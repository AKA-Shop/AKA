const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {type:Number },
    email: {type:Number},
    password: {type:Number},
    balance:{type:Number},
    image : {type:Number},
   
  })
);

module.exports = User;