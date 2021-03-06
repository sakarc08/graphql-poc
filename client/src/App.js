import React from 'react';
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css'

const client = new ApolloClient({
  uri: "/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
