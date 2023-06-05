import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import CommunityPage from './pages/CommunityPage';
import PostWritePage from './pages/PostWritePage';
import PostDetailPage from './pages/PostDetailPage';
import MainPage from './pages/MainPage';
import Login from './pages/LogInPage';
import Signin from './pages/SignInPage';
import SearchPage from './pages/SearchPage';
import OpenProfilePage from './pages/OpenProfilePage';
import Quiz from './pages/QuizPage';
import AdminUser from './pages/AdminUserPage';
import SchedulePage from './pages/SchedulePage';
import AdminPlanPage from './pages/AdminPlanPage';
import AdminNotificationPage from './pages/AdminNotificationPage';
import AdminPostPage from './pages/AdminPostPage';
import AdminTrackPage from './pages/AdminTrackPage';
import AdminReportPage from './pages/AdminReportPage';
import MainLayout from './MainLayout';
import LoginLayout from './LoginLayout';
import AdminLayout from './AdminLayout';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' exact element={<MainPage />} />
            <Route path='/community' element={<CommunityPage />} />
            <Route path='/community/:post_id' element={<PostDetailPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/schedule' element={<SchedulePage />} />
            <Route path='/openprofile' element={<OpenProfilePage />} />
          </Route>
          <Route element={<LoginLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/signin' element={<Signin />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path='/admin/users' element={<AdminUser />} />
            <Route path='/admin/plans' element={<AdminPlanPage />} />
            <Route path='/admin/reports' element={<AdminReportPage />} />
            <Route path='/admin/posts' element={<AdminPostPage />} />
            <Route path='/admin/tracks' element={<AdminTrackPage />} />
            <Route path='/admin/notifications' element={<AdminNotificationPage />} />
            <Route path='/write' element={<PostWritePage />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
