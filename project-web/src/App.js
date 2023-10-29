import Books from './Compenants/Books';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './config/apolloClient';
import './App.css';


const route = createBrowserRouter([
  {
      path: "/",
      element: <Books />,
  }
])

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={route} />
    </ApolloProvider>
  );
}


