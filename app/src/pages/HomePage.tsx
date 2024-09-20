import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';
const HomePage = () => {
  const isDekstop = useMediaQuery('(min-width: 768px)');
  return (
    <div className={`p-5 w-full h-dvh ${isDekstop ? 'bg-primary flex' : ''}`}>
      <nav>
        <Navbar isDekstop={isDekstop} />
      </nav>
      <main className="w-full"></main>
    </div>
  );
};
export default HomePage;
