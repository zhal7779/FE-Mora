import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </>
  );
};

export default App;
