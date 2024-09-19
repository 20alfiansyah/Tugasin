import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import RouterGuard from './components/RouterGuard';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<RouterGuard element={<LoginPage />} isPublic />}
          />
          <Route
            path="/register"
            element={<RouterGuard element={<RegisterPage />} isPublic />}
          />
          <Route
            path="/home"
            element={<RouterGuard element={<HomePage />} />}
          />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
