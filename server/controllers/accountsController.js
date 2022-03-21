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
  // get the name from req.params
  const { name } = req.params;
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

/**
 * Middleware to login
 */
accountsController.login = async (req, res, next) => {
  // get the username and password from the req body
  const {username, password} = req.body;
  // get the account information from the database
  try {
    // select all users with the username
    const query = {
      text:'SELECT * from accounts WHERE name = $1',
      values: [username],
    }
    // query the database, assign the result in dbRes
    const dbRes = await client.query(query);
    //check if the account password matches the req body password
    if (dbRes.rows[0].password === password) {
      // assign res.locals.account the account information
      res.locals.account = dbRes.rows[0];
      // go to the next middleware
      next();
    } else {
        // if the passwords dont match return an error
        return next({
          log: 'Error Express - accountsController.login, password does not match',
          status: 500,
          message: {err: "Password does not match"},
        })
     }
  }catch(err) {
      // if there is an err, return the errorObj to the global error handler
      // if it errs here, the account does not exist
      return next({
        log: 'Error Express - accountsController.login',
        status: 500,
        message: {err: "Account does not exist"},
      })
  }
}
/**
 * Middleware to change password
 */
accountsController.changePassword = async (req , res, next ) => {
  // get the name from params
  const { name } = req.params;
  // get the new password from the body
  const { password } = req.body;
  try {
    // update the password where the account name is equal to name 
    const query = {
      text:'UPDATE accounts SET password = $2 WHERE accounts.name = $1',
      values: [name, password]
    }
    await client.query(query);
    // assign res.locals.message a string stating the password has been updated
    res.locals.message = "Password has been updated";
    // go to the next middleware
    next();
  }
  catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - accountsController.changePassword',
      status: 500,
      message: {err},
    })
  }
}
/**
 * Middleware to delete an account
 */
 accountsController.deleteAccount = async (req , res, next ) => {
  // get the name from params
  const { name } = req.params;
  try {
    // update the password where the account name is equal to name 
    const query = {
      text:'DELETE FROM accounts WHERE accounts.name = $1',
      values: [name]
    }
    await client.query(query);
    // assign res.locals.message a string stating the password has been updated
    res.locals.message = "Account has been deleted";
    // go to the next middleware
    next();
  }
  catch (err) {
    // if there is an err, return the errorObj to the global error handler
    return next({
      log: 'Error Express - accountsController.deleteAccount',
      status: 500,
      message: {err},
    })
  }
}



module.exports = accountsController;