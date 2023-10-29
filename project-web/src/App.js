import Books from './Compenants/Books';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';

const route = createBrowserRouter([
  {
      path: "/",
      element: <Books />,
  }
])

export default function App() {
  return (
    <RouterProvider router={route} />
  );
}


