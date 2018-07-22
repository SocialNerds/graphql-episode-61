const express = require('express');
const graphqlExpress = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const schema = buildSchema(`
  type Query {
    message: String
  }
`);
const rootValue = {
  message: () => 'Hello nerds!'
};

app.use('/graphql', graphqlExpress({
  schema,
  rootValue,
  graphiql: true
}));

app.listen(4000, () => console.log('Server listening on port 3000!'));
