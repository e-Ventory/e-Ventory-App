const itemsController = {};

itemsController.getAllItems = (req , res, next ) => {

  console.log('GETTING TO THE GET ALL items MIDDLEWARE');
  return next();
}


module.exports = itemsController;