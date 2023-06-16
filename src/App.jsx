import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import CommunityPage from './pages/CommunityPage';
import PostWritePage from './pages/PostWritePage';
import PostDetailPage from './pages/PostDetailPage';
import MainPage from './pages/MainPage';
import Login from './pages/LogInPage';
import Signin from './pages/SignInPage';
import SearchPage from './pages/SearchPage';
import OpenProfilePage from './pages/OpenProfilePage';
import Quiz from './pages/QuizPage';
import MyPage from './pages/MyPage';
import MyPageEditPage from './pages/MyPageEditPage';
import MyPageSkillPage from './pages/MyPageSkillPage';
import MyPageCareerPage from './pages/MyPageCareerPage';
import MyPageEduPage from './pages/MyPageEduPage';
import MyPageLinkPage from './pages/MyPageLinkPage';
import AdminUser from './pages/AdminUserPage';
import SchedulePage from './pages/SchedulePage';
import AdminPlanPage from './pages/AdminPlanPage';
import AdminNotificationPage from './pages/AdminNotificationPage';
import AdminPostPage from './pages/AdminPostPage';
import AdminTrackPage from './pages/AdminTrackPage';
import MainLayout from './MainLayout';
import LoginLayout from './LoginLayout';
import AdminLayout from './AdminLayout';
import NonmemberPage from './pages/NonmemberPage';
import ScrollToTop from './utils/ScrollToTop';
import AdminPostDetailPage from './pages/AdminPostDetailPage';
import AdminLogIn from './admins/adminLogIn/components/AdminLogIn';
import AdminSignIn from './admins/adminSignIn/components/AdminSignIn';

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route element={<MainLayout />}>
                <Route path='/' exact element={<MainPage />} />
                <Route path='/community/post/:category' element={<CommunityPage />} />
                <Route path='/community/:board_id' element={<PostDetailPage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/schedule' element={<SchedulePage />} />
                <Route path='/openprofile' element={<OpenProfilePage />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/nonmember' element={<NonmemberPage />} />
              </Route>
              <Route element={<LoginLayout />}>
                <Route path='/login' element={<Login />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/mypage/edit' element={<MyPageEditPage />} />
                <Route path='/mypage/skill' element={<MyPageSkillPage />} />
                <Route path='/mypage/career' element={<MyPageCareerPage />} />
                <Route path='/mypage/education' element={<MyPageEduPage />} />
                <Route path='/mypage/link' element={<MyPageLinkPage />} />
              </Route>
              <Route element={<AdminLayout />}>
                <Route path='/admin/users' element={<AdminUser />} />
                <Route path='/admin/plans' element={<AdminPlanPage />} />
                <Route path='/admin/posts' element={<AdminPostPage />} />
                <Route path='/admin/tracks' element={<AdminTrackPage />} />
                <Route path='/admin/notifications' element={<AdminNotificationPage />} />
                <Route path='/admin/posts/detail/:boardId' element={<AdminPostDetailPage />} />
                <Route path='/write' element={<PostWritePage />} />
              </Route>
              <Route path='/admin/' element={<AdminLogIn />} exact />
              <Route path='/admin/login' element={<AdminLogIn />} />
              <Route path='/admin/signin' element={<AdminSignIn />} />
            </Routes>
          </Router>
        </React.StrictMode>

        <ReactQueryDevtools initialIsOpen={true} position='bottom-right' />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
