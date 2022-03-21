const express = require('express');
router = express.Router();
const accountsController = require('../controllers/accountsController');



// handle get requests to the root path with a param - get a single account (NOT CURRENTLY USED IN FRONT END)
router.get('/:name', accountsController.getAnAccount, (req,res) => {
  res.status(200).json({account: res.locals.account})
});
// handle get requests to the root path - gets all accounts information (USED WHEN SIGNING UP)
router.get('/', accountsController.getAllAccounts, (req,res) => {
  res.contentType('application/json').status(200).json({accounts: res.locals.accounts});
});
// handle post requests to the signup path - Creates an Account (USED WHEN SIGNING UP)
router.post('/signup', accountsController.createAccount, (req,res) => {
  res.contentType('application/json').status(200).json({message: res.locals.message});
});
// handle post requests to the path login - Logs in an account (USED WHEN LOGGING IN)
router.post('/login/', accountsController.login, (req, res) => {
  res.contentType('application/json').status(200).json({account: res.locals.account});
})
// handle patch requests to the rooth path with a param(NOT CURRENTLY USED, SHOULD BE USED WHEN CHANGING PASSWORD)
router.patch('/:name', accountsController.changePassword, (req, res) => {
  res.contentType('application/json').status(200).json({message: res.locals.message});
})
// handle delete requests to the root path with a param
router.delete('/:name', accountsController.deleteAccount, (req, res) => {
  res.contentType('application/json').status(200).json({message: res.locals.message});
})



module.exports = router;