const express = require('express');
router = express.Router();
const accountsController = require('../controllers/accountsController');



// handle get requests to the root path with a param - get a single account
router.get('/:id', accountsController.getAnAccount, (req,res) => {
  res.status(200).json({account: res.locals.account})
});
// handle get requests to the root path - gets all accounts information
router.get('/', accountsController.getAllAccounts, (req,res) => {
  res.contentType('application/json').status(200).json({accounts: res.locals.accounts});
});
// handle get requests to the root path - Creates an Account
router.post('/', accountsController.createAccount, (req,res) => {
  res.contentType('application/json').status(200).json({message: res.locals.message});
});
// handle get requests to the path login - Logs in an account
router.post('/login/', accountsController.login, (req, res) => {
  res.contentType('application/json').status(200).json({account: res.locals.account});
})


module.exports = router;