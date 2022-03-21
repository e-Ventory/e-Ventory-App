const express = require('express');
router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/',itemsController.getAllItems, (req,res) => {

  // request body sends the item information
  // console.log('RECIEVED!', res.locals.items)
  res.status(200).json({items: res.locals.items});

})

router.patch('/',itemsController.updateItem, (req,res) => {

  // request body sends the item information

  res.status(200).json({message: ' update items route'});

})

router.post('/',itemsController.createItem, (req,res) => {

  // request body sends the item information

  res.status(200).json({message: 'create item route'});

})


module.exports = router;