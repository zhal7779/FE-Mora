import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import CommunityPage from './pages/CommunityPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
