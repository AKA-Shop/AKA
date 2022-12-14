var userRouter = require('express').Router();
var userController = require('../controller/user');

// TODO: Create route handlers for each of the six methods in userController
userRouter.route('/')

userRouter.get("/getAll", userController.retrieve );

userRouter.post("/signUp" , userController.signUp);
userRouter.post("/login" , userController.login);
userRouter.get("/accessRessource" , userController.accessResource);



module.exports = userRouter;