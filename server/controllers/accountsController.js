const accountsController = {};
const client = require('../models/eventoryModel');

/*
* Middleware to get all Accounts
*/
accountsController.getAllAccounts = async (req , res, next ) => {
  try {
    // query the database for all accounts in accounts
    const dbRes = await client.query('SELECT * FROM accounts');
    // store the result of the query into res.locals.accounts
    res.locals.accounts = dbRes.rows
    // return next
    return next();
  }
  catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - usersController.getAllUsers',
      status: 500,
      message: {err} 
    })
  }
}
/*
* Middleware to get a single account
*/
accountsController.getAnAccount = async (req , res, next ) => {
  // get the id from req.params
  const { id } = req.params;
  try {
    // create an object with the query text, and the values to insert into the query
    const query = {
      text:'SELECT * FROM accounts WHERE accounts.name = $1',
      values: [id],
    }
    // query the database for all accounts in accounts
    const dbRes = await client.query(query);
    // store the result of the query into res.locals.accounts
    res.locals.account = dbRes.rows[0]
    // return next
    return next();
  }
  catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - accountsController.getAnAccount',
      status: 500,
      message: {err},
    })
  }
}
/*
* Middleware to create an account
*/
accountsController.createAccount = async (req , res, next ) => {

  // get the name, email, password, type from the req.body
  const {name, email, password, type} = req.body;
  try {
    // create an object with the query text, and the values to insert into the query
    const query = {
      text:'INSERT INTO accounts (name, email, password, type) VALUES ($1, $2, $3, $4)',
      values: [name, email, password, type],
    }
    // query the database for all accounts in accounts
    await client.query(query);
    // store the result of the query into res.locals.accounts
    res.locals.message = `Account ${name} has been created`
    // return next
    return next();
  }
  catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - accountsController.createAccount',
      status: 500,
      message: {err},
    })
  }
}

module.exports = accountsController;