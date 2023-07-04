import React from 'react';
import Header from './header/components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LoginLayout;
