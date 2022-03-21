const express = require('express');
const app = express();
const PORT_NUMBER = 3000;
const path = require('path');
const cors = require('cors');


/**
 * require routers
 */

 const accountsRouter = require('./routes/accounts.js');
 const itemsRouter = require('./routes/items.js');

// handle parsing request body
// json object
app.use(express.json());

//use cors() on all requests
app.use(cors());

/**
 * send static files to all requests with path '/'
 */
// send static files
app.use('/', express.static(path.resolve(__dirname, '../dist/')));

//send index.html all all requests with path /
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
})

/**
 * ROUTES
 */

// send to user router on path /accounts/
app.use('/accounts/',accountsRouter);
// send to user router on path /items/
app.use('/items/',itemsRouter);


// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});





















app.listen(PORT_NUMBER, () => {
  console.log(`listening on port ${PORT_NUMBER}`)
});