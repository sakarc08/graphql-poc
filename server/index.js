const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors')
const mongoose = require('mongoose')
const schema = require('./schema/schema')

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

mongoose.connect('mongodb+srv://admin:admin@cluster0-psk9l.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true});
mongoose.connection.on('open', () => {
    console.log('db connected');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(3003, () => {
    console.log('App started at port 3000');
})