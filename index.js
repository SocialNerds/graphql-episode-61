const express = require('express');
const graphqlExpress = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlExpress({
  schema,
  graphiql: true
}));

app.listen(3000, () => console.log('Server listening on port 3000!'));
