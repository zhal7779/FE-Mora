import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import CommunityPage from './pages/CommunityPage';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
