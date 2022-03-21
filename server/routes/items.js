const express = require('express');
router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/:id',itemsController.getAllItems, (req,res) => {

  // request body sends the item information
  // console.log('RECIEVED!', res.locals.items)
  res.status(200).json({items: res.locals.items});

})

router.patch('/',itemsController.updateItem, (req,res) => {

  // request body sends the item to indicate which item to update

  // res.status(200);
  res.status(200).json({item: res.locals.updatedItem});

})

router.post('/',itemsController.createItem, (req,res) => {

  // request body sends the item information, then inserted into db table

  res.status(200).json({item: res.locals.createdItem});

})

router.delete('/:itemId', itemsController.deleteItem, (req, res) => {

  res.status(200).json({message: 'item deleted'});

})


module.exports = router;