import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation } from '@apollo/client';
import CreateUser from './Components/CreateUser';
import ListOfUsers from './Components/ListOfUser';
import UpdatePassword from './Components/UpdatePassword';
import './App.css';
import New from './Components/New';
function App() {
  const client = new ApolloClient ({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache()
  })
  return (
    <ApolloProvider client={client}>
      <CreateUser />
      <ListOfUsers />
      <UpdatePassword />
    </ApolloProvider>
  );
}

export default App;
