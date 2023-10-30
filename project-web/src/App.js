// Importing necessary components and functions from libraries and files
import Books from './Compenants/Books';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './config/apolloClient'; // Apollo Client for GraphQL API interaction
import './App.css'; // Stylesheet for the App component
import Book from './Compenants/Book';
import Ebooks from './Compenants/Ebooks';
import LoginPage from './Compenants/login';
import RegisterPage from './Compenants/registration';

// Creating a router with predefined routes for the application
const route = createBrowserRouter([
  {
    // Route for the home page, which will render the Books component
    path: "/",
    element: <Books />,
  },
  {
    // Route for individual book details, which will render the Book component
    // The ":id" is a URL parameter that will be used to fetch and display a specific book
    path: "/book/:id",
    element: <Book />,
  },
  {
    // Route for the ebooks page, which will render the Ebooks component
    path: "/e_book",
    element: <Ebooks />,
  },
  {
    // Route for the ebooks page, which will render the Ebooks component
    path: "/login",
    element: <LoginPage/>,
  },
  {
    // Route for the ebooks page, which will render the Ebooks component
    path: "/Register",
    element: <RegisterPage/>,
  },
  {
    // Route for filtering ebooks by genre, which will also render the Ebooks component
    // The ":genrename" is a URL parameter that will be used to filter ebooks by a specific genre
    path: "/e_book/genre/:genrename",
    element: <Ebooks />,
  }
]);

// The main App component that wraps the entire application
export default function App() {
  return (
    // ApolloProvider makes the Apollo Client available to all child components in the application
    <ApolloProvider client={client}>
      {/* RouterProvider makes the routing configuration available to the application */}
      <RouterProvider router={route} />
    </ApolloProvider>
  );
}
