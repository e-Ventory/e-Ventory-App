const express = require('express');
router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.getAllUsers, (req,res) => {
  res.status(200).json({message: 'hi'});
})



module.exports = router;