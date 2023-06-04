import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import CommunityPage from './pages/CommunityPage';
import MainPage from './pages/MainPage';
import Login from './pages/LogInPage';
import Signin from './pages/SignInPage';
import AdminUser from './pages/AdminUserPage';
import SearchPage from './pages/SearchPage';
import OpenProfilePage from './pages/OpenProfilePage';
import Quiz from './pages/QuizPage';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' exact element={<MainPage />} />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/admin/users' element={<AdminUser />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/openprofile' element={<OpenProfilePage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
