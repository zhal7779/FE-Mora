import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyle from './ResetStyle';
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <App />
    <Header />
  </React.StrictMode>
);
