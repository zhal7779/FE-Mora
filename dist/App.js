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
import AdminPostDetailPage from './pages/AdminPostDetailPage';
import AdminLogIn from './admins/adminLogIn/components/AdminLogIn';
import AdminSignIn from './admins/adminSignIn/components/AdminSignIn';
import ScrollToTop from './utils/ScrollToTop';
const queryClient = new QueryClient();
const App = () => {
    return (React.createElement(React.StrictMode, null,
        React.createElement(QueryClientProvider, { client: queryClient },
            React.createElement(React.StrictMode, null,
                React.createElement(Router, null,
                    React.createElement(ScrollToTop, null),
                    React.createElement(Routes, null,
                        React.createElement(Route, { element: React.createElement(MainLayout, null) },
                            React.createElement(Route, { path: '/', exact: true, element: React.createElement(MainPage, null) }),
                            React.createElement(Route, { path: '/community/post/:category', element: React.createElement(CommunityPage, null) }),
                            React.createElement(Route, { path: '/community/:board_id', element: React.createElement(PostDetailPage, null) }),
                            React.createElement(Route, { path: '/search', element: React.createElement(SearchPage, null) }),
                            React.createElement(Route, { path: '/schedule/:category', element: React.createElement(SchedulePage, null) }),
                            React.createElement(Route, { path: '/openprofile', element: React.createElement(OpenProfilePage, null) }),
                            React.createElement(Route, { path: '/mypage', element: React.createElement(MyPage, null) }),
                            React.createElement(Route, { path: '/nonmember', element: React.createElement(NonmemberPage, null) })),
                        React.createElement(Route, { element: React.createElement(LoginLayout, null) },
                            React.createElement(Route, { path: '/login', element: React.createElement(Login, null) }),
                            React.createElement(Route, { path: '/quiz', element: React.createElement(Quiz, null) }),
                            React.createElement(Route, { path: '/signin', element: React.createElement(Signin, null) }),
                            React.createElement(Route, { path: '/mypage/edit', element: React.createElement(MyPageEditPage, null) }),
                            React.createElement(Route, { path: '/mypage/skill', element: React.createElement(MyPageSkillPage, null) }),
                            React.createElement(Route, { path: '/mypage/career', element: React.createElement(MyPageCareerPage, null) }),
                            React.createElement(Route, { path: '/mypage/education', element: React.createElement(MyPageEduPage, null) }),
                            React.createElement(Route, { path: '/mypage/link', element: React.createElement(MyPageLinkPage, null) })),
                        React.createElement(Route, { element: React.createElement(AdminLayout, null) },
                            React.createElement(Route, { path: '/admin/users', element: React.createElement(AdminUser, null) }),
                            React.createElement(Route, { path: '/admin/plans', element: React.createElement(AdminPlanPage, null) }),
                            React.createElement(Route, { path: '/admin/posts', element: React.createElement(AdminPostPage, null) }),
                            React.createElement(Route, { path: '/admin/tracks', element: React.createElement(AdminTrackPage, null) }),
                            React.createElement(Route, { path: '/admin/notifications', element: React.createElement(AdminNotificationPage, null) }),
                            React.createElement(Route, { path: '/admin/posts/detail/:boardId', element: React.createElement(AdminPostDetailPage, null) }),
                            React.createElement(Route, { path: '/write', element: React.createElement(PostWritePage, null) })),
                        React.createElement(Route, { path: '/admin/', element: React.createElement(AdminLogIn, null), exact: true }),
                        React.createElement(Route, { path: '/admin/login', element: React.createElement(AdminLogIn, null) }),
                        React.createElement(Route, { path: '/admin/signin', element: React.createElement(AdminSignIn, null) })))),
            React.createElement(ReactQueryDevtools, { initialIsOpen: true, position: 'bottom-right' }))));
};
export default App;
