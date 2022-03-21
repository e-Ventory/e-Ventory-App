const itemsController = {};
const client = require('../models/eventoryModel');

itemsController.getAllItems = async (req , res, next ) => {
  // right now this just grabs all items, do we want to make sure we only grab items from
  // a particular user????
  const { id } = req.body;

  try {
    const dbRes = await client.query('SELECT * FROM items WHERE items.account_id = $1', [id]);
    console.log(dbRes.rows);
    res.locals.items = [...dbRes.rows]
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

// itemsController.getAItem = (req , res, next ) => {
//   console.log('GETTING TO THE GET A items MIDDLEWARE');
//   return next();
// }

itemsController.updateItem = (req , res, next ) => {

  console.log('GETTING TO THE UPDATE items MIDDLEWARE');
  return next();
}

itemsController.createItem = (req , res, next ) => {

  console.log('GETTING TO THE CREATE items MIDDLEWARE');
  return next();
}

module.exports = itemsController;