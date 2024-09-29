import Navbar from '../components/Navbar';
import DashboardPage from '@/pages/DashboardPage';
import TaskPage from '@/pages/TaskPage';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Route, Routes } from 'react-router-dom';
import BreadCrumbs from '@/components/BreadCrumb';
const HomePage = () => {
  const isDekstop = useMediaQuery('(min-width: 640px)');
  const location = useLocation();
  return (
    <>
      <div
        className={`p-5 h-dvh  ${isDekstop ? 'bg-secondary flex gap-2 ' : ''}`}
      >
        <nav>
          <Navbar isDekstop={isDekstop} />
        </nav>
        <main className="w-full h-full font-Poppins-">
          <div
            className={`${isDekstop ? 'w-full h-full bg-background p-5 rounded-xl flex flex-col  ' : ''}`}
          >
            <div>
              <BreadCrumbs />
            </div>
            <div className="w-full h-full">
              <Routes>
                <Route
                  path="/"
                  element={<DashboardPage isDekstop={isDekstop} />}
                />
                <Route
                  path="/task"
                  element={<TaskPage isDekstop={isDekstop} />}
                />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default HomePage;
