const usersController = {};
const client = require('../models/eventoryModel');

usersController.getAllUsers = async (req , res, next ) => {
  try {
    const dbRes = await client.query('SELECT * FROM organization');
    console.log(dbRes.rows);
    console.log('GETTING TO THE GET ALL USERS MIDDLEWARE');
    return next();
  }
  catch (err) {
    // console.log(err)
    return next({
      log: 'Error Express - usersController.getAllUsers',
      status: 500,
      message: {err} 
    })
  }
}


module.exports = usersController;