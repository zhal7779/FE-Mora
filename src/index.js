import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ResetStyle from './ResetStyle';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <App />
  </React.StrictMode>
);
