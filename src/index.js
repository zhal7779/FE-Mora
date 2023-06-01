import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyle from './ResetStyle';
import Header from './components/header';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <App />
    <Header />
    <Footer />
  </React.StrictMode>
);
