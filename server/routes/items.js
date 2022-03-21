const express = require('express');
router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/:id',itemsController.getAllItems, (req,res) => {

  // request body sends the item information
  // console.log('RECIEVED!', res.locals.items)
  res.status(200).json({items: res.locals.items});

})

router.patch('/:userId',itemsController.updateItem, (req,res) => {

  // request body sends the item to indicate which item to update

  res.status(200).json({item: res.locals.updatedItem});

})

router.post('/:userId',itemsController.createItem, (req,res) => {

  // request body sends the item information, then inserted into db table

  res.status(200).json({item: res.locals.createdItem});

})

router.delete('/:itemId', (req, res) => {

  res.status(200).json({message: 'item deleted'});

})


module.exports = router;