import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
