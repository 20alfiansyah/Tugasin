import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import RouterGuard from './components/RouterGuard';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<RouterGuard element={<LoginPage />} isPublic />}
        />
        <Route
          path="/register"
          element={<RouterGuard element={<SignUpPage />} isPublic />}
        />
        <Route path="/home" element={<RouterGuard element={<HomePage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
