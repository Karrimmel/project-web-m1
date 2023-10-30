import Books from './Compenants/Books';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './config/apolloClient';
import './App.css';
import Book from './Compenants/Book';
import Ebooks from './Compenants/Ebooks';



const route = createBrowserRouter([
  {
      path: "/",
      element: <Books />,
  },
  {
      path:"/book/:id",
      element: <Book />,
  },
  {
     path:"/e_book",
     element: <Ebooks />,
  },
  {
      path:"/e_book/genre/:genrename",
      element:<Ebooks />,
  }
])

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={route} />
    </ApolloProvider>
  );
}


