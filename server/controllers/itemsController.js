const itemsController = {};
const client = require('../models/eventoryModel');

itemsController.getAllItems = async (req , res, next ) => {
  // right now this just grabs all items, do we want to make sure we only grab items from
  // a particular user????
  const { id } = req.params;

  try {
    const dbRes = await client.query('SELECT * FROM items WHERE items.account_id = $1', [id]);
    console.log(dbRes.rows);
    res.locals.items = [...dbRes.rows];
    console.log('GETTING TO THE GET ALL USERS MIDDLEWARE');
    return next();
  }
  catch (err) {
    return next({
      log: 'Error Express - usersController.getAllUsers',
      status: 500,
      message: {err} 
    })
  }

}

itemsController.updateItem = async (req , res, next ) => {

  // console.log('request params:', req.params);
  // console.log('request body:', req.body);

  const  account_id  = req.params.userId;
  const { id, name, info, quantity, category, location } = req.body;

  try {
    const dbRes = await client.query(
    "UPDATE items SET name = $1, info = $2, quantity = $3, category = $4, location = $5 WHERE id = $6;"  
    , [name, info, quantity, category, location, id]);
    console.log(dbRes.command);
    res.locals.updatedItem = { id, name, info, quantity, category, location, account_id };
    return next();
  }
  catch (err) {
    return next({
      log: 'Error Express - usersController.updateItem',
      status: 500,
      message: {err} 
    })
  }

}

itemsController.createItem = async (req , res, next ) => {

  const  account_id  = req.params.userId;
  const { name, info, quantity, category, location } = req.body;

  try {
    const dbRes = await client.query('INSERT INTO items (name, info, quantity, category, location, account_id) VALUES ($1, $2, $3, $4, $5, $6)', [name, info, quantity, category, location, account_id]);
    console.log(dbRes);
    res.locals.createdItem = { name, info, quantity, category, location, account_id };
    return next();
  }
  catch (err) {
    return next({
      log: 'Error Express - usersController.createItem',
      status: 500,
      message: {err} 
    })
  }

}

itemsController.deleteItem = async (req , res, next ) => {

  const  item_id  = req.params.itemId;

  try {
    const dbRes = await client.query('DELETE FROM items WHERE ID = $1', [item_id]);
    // console.log(dbRes);
    return next();
  }
  catch (err) {
    return next({
      log: 'Error Express - usersController.deleteItem',
      status: 500,
      message: {err} 
    })
  }

}

module.exports = itemsController;