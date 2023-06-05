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
import MainLayout from './MainLayout';
import LoginLayout from './LoginLayout';
import AdminLayout from './AdminLayout';
import SchedulePage from './pages/SchedulePage';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/openprofile' element={<OpenProfilePage />} />
            <Route path='/' exact element={<MainPage />} />
            <Route path='/community' element={<CommunityPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/schedule' element={<SchedulePage />} />
          </Route>
          <Route element={<LoginLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/signin' element={<Signin />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path='/admin/users' element={<AdminUser />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
