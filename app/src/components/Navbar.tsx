import { useEffect, useState } from 'react';
import logoTugasin from '@/assets/logoTugasin.svg';

import { useLocation } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Squares2X2Icon,
  Square2StackIcon,
  Square3Stack3DIcon,
  Cog6ToothIcon,
  ArrowLeftEndOnRectangleIcon,
  ChatBubbleBottomCenterTextIcon,
  CalendarDaysIcon,
  Bars3Icon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
const Navbar: React.FC<{ isDekstop: boolean }> = ({ isDekstop }) => {
  const location = useLocation();
  const { setTheme } = useTheme();
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [isDark]);

  return isDekstop ? (
    <>
      <div className="min-w-56 h-full bg-white p-4 rounded-xl">
        <div className="w-full">
          <img src={logoTugasin} alt="" />
        </div>
      </div>
    </>
  ) : (
    <Drawer direction="left">
      <div className="w-full flex justify-between items-center text-lg font-Poppins font-bold">
        <DrawerTrigger asChild>
          <Button variant={'outline'} size={'icon'}>
            <Bars3Icon className="w-5 h-5"></Bars3Icon>
          </Button>
        </DrawerTrigger>
        <h1>Dashboard</h1>
        <Button size={'icon'} variant={'ghost'}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </div>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm font-Poppins">
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-between gap-1 font-Poppins text-xl font-bold">
              <span className="flex gap-2">
                <img src={logoTugasin} alt="" className="w-10" />
                Tugasin
              </span>
              <span>
                <DrawerClose asChild>
                  <Button variant={'outline'} size={'icon'}>
                    <Bars3Icon className="w-5 h-5"></Bars3Icon>
                  </Button>
                </DrawerClose>
              </span>
            </DrawerTitle>
            <DrawerDescription className="flex justify-start">
              Manage your daily task
            </DrawerDescription>
          </DrawerHeader>
          <div className=" flex flex-col gap-4 h-full  px-4">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-muted-foreground text-sm">
                Menu
              </p>
              <Button
                className={`py-6 border-0 flex gap-3 justify-start bg-transparent text-foreground text-sm shadow-none hover:bg-primary/20 ${location.pathname === '/home' ? 'font-bold text-primary bg-primary/20' : ''}`}
              >
                <Squares2X2Icon className="w-6 h-6 " />
                Dashboard
              </Button>
              <Button
                className={`py-6 border-0 flex gap-3 justify-start bg-transparent text-foreground text-sm shadow-none hover:bg-primary/20 ${location.pathname === '/todaytask' ? 'font-bold text-primary bg-primary/20' : ''}`}
              >
                <Square2StackIcon className="w-6 h-6" />
                Today Task
              </Button>
              <Button
                className={`py-6 border-0 flex gap-3 justify-start bg-transparent text-foreground text-sm shadow-none hover:bg-primary/20 ${location.pathname === '/alltask' ? 'font-bold text-primary bg-primary/20' : ''}`}
              >
                <Square3Stack3DIcon className="w-6 h-6" />
                All Task
              </Button>
              <Button
                className={`py-6 border-0 flex gap-3 justify-start bg-transparent text-foreground text-sm shadow-none hover:bg-primary/20 ${location.pathname === '/calendar' ? 'font-bold text-primary bg-primary/20' : ''}`}
              >
                <CalendarDaysIcon className="w-6 h-6" />
                Calendar
              </Button>
              <Button
                className={`py-6 border-0 flex gap-3 justify-start bg-transparent text-foreground text-sm shadow-none hover:bg-primary/20 ${location.pathname === '/settings' ? 'font-bold text-primary bg-primary/20' : ''}`}
              >
                <Cog6ToothIcon className="w-6 h-6" />
                Settings
              </Button>
              <Button
                className={`py-6 border-0 flex gap-3 justify-start bg-transparent text-foreground text-sm shadow-none hover:bg-primary/20 ${location.pathname === '/help' ? 'font-bold text-primary bg-primary/20' : ''}`}
              >
                <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
                Help Center
              </Button>
            </div>
            <div className="flex flex-col gap-1"></div>
          </div>
        </div>
        <DrawerFooter>
          <Button
            className={`py-6 border-0 flex gap-3 justify-start bg-transparent text-foreground text-sm shadow-none hover:bg-destructive/40`}
          >
            <ArrowLeftEndOnRectangleIcon className="w-6 h-6" />
            Log Out
          </Button>
          <div className="flex items-center gap-3 px-4 justify-between">
            <div className="flex gap-3">
              <SunIcon className="w-6 h-6" />
              <label htmlFor="" className="font-semibold text-sm">
                Dark Mode
              </label>
            </div>
            <Switch checked={isDark} onCheckedChange={setDark} />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default Navbar;
