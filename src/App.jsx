import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/'></Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
