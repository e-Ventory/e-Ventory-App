const connectionString = 'postgres://rngolnjc:n65esgAAoHqJ7jMSeJAYlw_w77qcdeUf@kashin.db.elephantsql.com/rngolnjc';

const { Client } = require('pg')
const client = new Client(connectionString)

client.connect( (err) => {
  if(err) {
    return console.error('could not connect to postgres', err);
  } 
});

module.exports = {
  query: (text, params, callback) => {
    console.log('exected, query', text);
    return client.query(text, params, callback);
  }
}

