import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ResetStyle from './ResetStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <App />
  </React.StrictMode>
);
