import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import RouterGuard from './components/RouterGuard';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
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
      </ThemeProvider>
    </>
  );
}

export default App;
