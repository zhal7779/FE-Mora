import React from 'react';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminLayout;
