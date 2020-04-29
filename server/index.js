const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors')
const mongoose = require('mongoose')
const schema = require('./schema/schema')

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0-psk9l.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true});
mongoose.connection.on('open', () => {
    console.log('db connected');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('App started at port 3000');
})