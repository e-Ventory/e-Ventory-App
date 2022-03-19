const express = require('express');
const app = express();
const PORT_NUMBER = 3000;
const path = require('path');
const cors = require('cors');


/**
 * require routers
 */

 const usersRouter = require('./routes/users.js');
 const itemsRouter = require('./routes/items.js');

// handle parsing request body
// json object
app.use(express.json());

//use cors() on all requests
app.use(cors());

/**
 * send static files to all requests with path '/'
 */
app.use('/', express.static(path.resolve(__dirname, '../dist/')));

//send index.html all all requests with path /
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
})


// send to user router on path /users/
app.use('/users/',usersRouter);
app.use('/items/',itemsRouter);
























app.listen(PORT_NUMBER, () => {
  console.log(`listening on port ${PORT_NUMBER}`)
});