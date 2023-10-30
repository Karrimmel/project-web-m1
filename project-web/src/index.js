// Importing the necessary modules from React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main stylesheet for the application
import './index.css';
// Importing the main App component
import App from './App';
// Importing the reportWebVitals function for measuring app performance
import reportWebVitals from './reportWebVitals';

// Creating a root DOM node for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering the App component inside the root DOM node
// React.StrictMode is a tool for highlighting potential problems in an application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
  If you want to start measuring performance in your app, you can pass a function
  to log results (for example: reportWebVitals(console.log)).
  Alternatively, you can send the results to an analytics endpoint.
  Learn more about measuring performance: https://bit.ly/CRA-vitals
*/
reportWebVitals();
