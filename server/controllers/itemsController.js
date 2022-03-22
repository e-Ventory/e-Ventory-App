const itemsController = {};
const client = require('../models/eventoryModel');

itemsController.getAllItems = async (req , res, next ) => {
  // right now this just grabs all items, do we want to make sure we only grab items from
  // a particular user????
  const { id } = req.params;

  try {
    const dbRes = await client.query('SELECT * FROM items WHERE items.account_id = $1', [id]);
    // console.log(dbRes.rows);
    res.locals.items = [...dbRes.rows];
    console.log('GETTING TO THE GET ALL USERS MIDDLEWARE');
    return next();
  }
  catch (err) {
    return next({
      log: 'Error Express - itemsController.getAllUsers',
      status: 500,
      message: {err} 
    })
  }

}

itemsController.updateItem = async (req , res, next ) => {
  
  const { id } = req.body.items;
  
  try {
    // Line 31 - 47 is to update only field that were filled in
    //  copy item
    const updateItemInfo = {...req.body.items};
    //  check item for null values
    const newUpdatedItem = {};
    for (const property in updateItemInfo) {
      if (updateItemInfo[property]) {
        newUpdatedItem[property] = updateItemInfo[property];
      }
    }
    // grab old item 
      const dbItemRes = await client.query('SELECT * FROM items WHERE items.id = $1', [id]);

    // spread new info into old item
    const newObject = { ...dbItemRes.rows[0], ...newUpdatedItem };

    const { name, info, quantity, category, location } = newObject;

    const dbRes = await client.query(
    "UPDATE items SET name = $1, info = $2, quantity = $3, category = $4, location = $5 WHERE id = $6;"  
    , [name, info, quantity, category, location, id]);
    console.log(dbRes.command);
    res.locals.updatedItem = { id, name, info, quantity, category, location};
    return next();
  }
  catch (err) {
    return next({
      log: 'Error Express - itemsController.updateItem',
      status: 500,
      message: {err} 
    })
  }

}

// Create an inventory item on the database
itemsController.createItem = async (req , res, next ) => {

  // Grabs Query info from the request body
  const { name, info, quantity, category, location, account_id } = req.body.items;

  console.log(req.body.items);

  try {
    const dbRes = await client.query('INSERT INTO items (name, info, quantity, category, location, account_id) VALUES ($1, $2, $3, $4, $5, $6)', [name, info, quantity, category, location, account_id]);
    console.log(dbRes);
    res.locals.createdItem = { name, info, quantity, category, location, account_id };
    return next();
  }
  catch (err) {
    return next({
      log: {err},
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
      log: 'Error Express - itemsController.deleteItem',
      status: 500,
      message: {err} 
    })
  }

}

module.exports = itemsController;