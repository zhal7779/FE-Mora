import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import AdminUser from './adminUser/pages/AdminUser';
import Modal from './adminCommon/components/Modal';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/modal' element={<Modal />}></Route>
          <Route path='/' element={<AdminUser />}></Route>
          <Route path='/admin/users' element={<AdminUser />}></Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
