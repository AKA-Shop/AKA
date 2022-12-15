var User = require('../models/user.model.js');

const jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
// TODO: Complete each of the following controller methods

// Handling post request
exports.signUp = async function (req, res, next) {
    try {
        // Get user input
        const { username, email, password } = req.body;

        // Validate user input
        if (!(email && password && username )) {
          res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
          //return console.log("user mawjoud");
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);


        // Create user in our database
        const user = await User.create({
          username,
          email: email.toLowerCase(), // sanitize: convert email to lowercase
          password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
          {  email },
          "my_security_key",
          {
            expiresIn: "2h",
          }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
      } catch (err) {
        console.log(err);
      }



  };
exports.login = async function (req, res, next) {
    // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        {  email },
        "my_security_key",
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
  };

  exports.accessResource =  function (req, res ) {
    const token = req.headers.authorization.split(' ')[1]; 
    //Authorization: 'Bearer TOKEN'
    if(!token)
    {
        res.status(200).json({success:false, message: "Error!Token was not provided."});
    }
    //Decoding the token
    //const decodedToken = jwt.verify(token,"my_secret_key" );
    const decodedToken = jwt.verify(token , "my_security_key");
    res.status(200).json({success:true, data:{email:decodedToken.email}});
};



exports.createOne = function (req, res) {

};

exports.retrieve = function (req, res) {

};

exports.retrieveOne = function (req, res) {

};

exports.updateOne = function (req, res) {
};

exports.deleteOne = function (req, res) {
};