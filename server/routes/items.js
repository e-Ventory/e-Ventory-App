const express = require('express');
router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/',itemsController.getAllItems, (req,res) => {

  res.status(200).json({message: 'items route'});

})



module.exports = router;