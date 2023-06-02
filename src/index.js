import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyle from './ResetStyle';
import Signin from './Signin/Signin';
import Login from './Login/Login';
import Quiz from './Signin/Quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <App />
    <Quiz />
  </React.StrictMode>
);
