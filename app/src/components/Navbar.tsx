import logoTugasin from '@/assets/logoTugasin.svg';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useLocation } from 'react-router-dom';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import {
  Squares2X2Icon,
  FolderIcon,
  Square2StackIcon,
  Square3Stack3DIcon,
  Cog6ToothIcon,
  ArrowLeftEndOnRectangleIcon,
  ChatBubbleBottomCenterTextIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
const Navbar: React.FC = () => {
  const location = useLocation();
  const isDekstop = useMediaQuery('(min-width: 768px)');
  return isDekstop ? (
    <>
      <h1>Dekstop</h1>
    </>
  ) : (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm font-Poppins px-4">
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-end gap-1 font-Poppins text-xl font-bold">
              <span>
                <img src={logoTugasin} alt="" className="w-10" />
              </span>
              Tugasin
            </DrawerTitle>
          </DrawerHeader>
          <div className="px-3 flex flex-col gap-4 h-full justify-center ">
            <div className="flex flex-col gap-1">
              <p className="text-end font-semibold text-muted-foreground">
                General
              </p>
              <Button
                className={`py-6 border-0 flex gap-4 justify-end bg-transparent text-black text-base shadow-none hover:bg-blue-200/40 ${location.pathname === '/home' ? 'font-bold bg-blue-300/60 hover:bg-blue-300/60' : ''}`}
              >
                Dashboard
                <Squares2X2Icon className="w-7 h-7 " />
              </Button>
              <Button
                className={`py-6 border-0 flex gap-4 justify-end bg-transparent text-black text-base shadow-none hover:bg-blue-200/40 ${location.pathname === '/project' ? 'font-bold bg-blue-300/60' : ''}`}
              >
                Project
                <FolderIcon className="w-7 h-7" />
              </Button>
              <Button
                className={`py-6 border-0 flex gap-4 justify-end bg-transparent text-black text-base shadow-none hover:bg-blue-200/40 ${location.pathname === '/todaytask' ? 'font-bold bg-blue-300/60' : ''}`}
              >
                Today's Task
                <Square2StackIcon className="w-7 h-7" />
              </Button>
              <Button
                className={`py-6 border-0 flex gap-4 justify-end bg-transparent text-black text-base shadow-none hover:bg-blue-200/40 ${location.pathname === '/todaytask' ? 'font-bold bg-blue-300/60' : ''}`}
              >
                All Task
                <Square3Stack3DIcon className="w-7 h-7" />
              </Button>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-end font-semibold px-4 text-muted-foreground">
                Others
              </p>
              <Button
                className={`py-6 border-0 flex gap-4 justify-end bg-transparent text-black text-base shadow-none hover:bg-blue-200/40 ${location.pathname === '/settings' ? 'font-bold bg-blue-300/60 hover:bg-blue-300/60' : ''}`}
              >
                Settings
                <Cog6ToothIcon className="w-7 h-7" />
              </Button>
              <Button
                className={`py-6 border-0 flex gap-4 justify-end bg-transparent text-black text-base shadow-none hover:bg-blue-200/40 ${location.pathname === '/help' ? 'font-bold bg-blue-300/60 hover:bg-blue-300/60' : ''}`}
              >
                Help Center
                <UserCircleIcon className="w-7 h-7" />
              </Button>
              <Button
                className={`py-6 border-0 flex gap-4 justify-end bg-transparent text-black text-base shadow-none hover:bg-destructive/40`}
              >
                Log Out
                <ArrowLeftEndOnRectangleIcon className="w-7 h-7" />
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default Navbar;
