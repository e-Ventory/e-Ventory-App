const usersController = {};

usersController.getAllUsers = (req , res, next ) => {

  console.log('GETTING TO THE GET ALL USERS MIDDLEWARE');
  return next();
}


module.exports = usersController;