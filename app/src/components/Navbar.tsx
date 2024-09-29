import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  DrawerTitle,
} from '@/components/ui/drawer';
import {
  Squares2X2Icon,
  Square2StackIcon,
  Square3Stack3DIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowLeftEndOnRectangleIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import logoTugasin from '@/assets/logoTugasin.svg';
import NavbarItem from '@/components/NavbarItem';
import DarkModeSwitch from './DarkModeSwitch';
import { Button } from '@/components/ui/button';

const Navbar: React.FC<{ isDekstop: boolean }> = ({ isDekstop }) => {
  const location = useLocation();
  const { setTheme } = useTheme();
  const [isDark, setDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, setTheme]);

  const menuItems = [
    { icon: Squares2X2Icon, label: 'Dashboard', path: '/home' },
    {
      icon: Square3Stack3DIcon,
      label: 'Project',
      path: '/home/project',
      isCollapsible: true,
      subItems: [
        { label: 'Overview', path: '/home/project/overview' },
        { label: 'Details', path: '/home/project/details' },
      ],
    },
    { icon: Square2StackIcon, label: 'Task', path: '/home/task' },
    { icon: CalendarDaysIcon, label: 'Calendar', path: '/home/calendar' },
    { icon: Cog6ToothIcon, label: 'Settings', path: '/home/settings' },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      label: 'Help Center',
      path: '/home/help',
    },
  ];

  return isDekstop ? (
    <Card className="w-64 py-2 h-full flex flex-col justify-between  overflow-scroll">
      <div>
        <CardHeader className="font-Poppins">
          <CardTitle>
            <span className="flex gap-2 items-center">
              <img src={logoTugasin} alt="Logo" className="w-10" />
              Tugasin
            </span>
          </CardTitle>
          <CardDescription>Manage your daily task</CardDescription>
        </CardHeader>
        <CardContent className="px-5 font-Poppins">
          <div className="flex flex-col gap-2 h-full ">
            <p className="font-semibold text-muted-foreground text-xs">Menu</p>
            {menuItems.map((item) => (
              <NavbarItem
                key={item.path}
                icon={item.icon}
                label={item.label}
                path={item.path}
                isCollapsible={item.isCollapsible}
                isActive={location.pathname === item.path}
                subItems={item.subItems}
              />
            ))}
          </div>
        </CardContent>
      </div>
      <CardFooter className="flex flex-col items-start gap-4 font-Poppins">
        <Button className="py-6 w-full border-0 flex gap-3 justify-start bg-transparent text-foreground text-xs shadow-none hover:bg-destructive/40">
          <ArrowLeftEndOnRectangleIcon className="w-6 h-6" />
          Log Out
        </Button>
        <DarkModeSwitch isDark={isDark} setDark={setDark} />
      </CardFooter>
    </Card>
  ) : (
    <Drawer direction="left">
      <div className="w-full flex justify-between items-center text-lg font-Poppins font-bold">
        <DrawerTrigger asChild>
          <Button variant={'outline'} size={'icon'}>
            <Bars3Icon className="w-5 h-5" />
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
      <DrawerContent className="overflow-scroll">
        <div className="mx-auto w-full max-w-sm font-Poppins">
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-between gap-1 font-Poppins text-xl font-bold">
              <span className="flex gap-2">
                <img src={logoTugasin} alt="Logo" className="w-10" />
                Tugasin
              </span>
              <DrawerTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                  <Bars3Icon className="w-5 h-5" />
                </Button>
              </DrawerTrigger>
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-2 h-full px-4">
            {menuItems.map((item) => (
              <NavbarItem
                key={item.path}
                icon={item.icon}
                label={item.label}
                path={item.path}
                isCollapsible={item.isCollapsible}
                isActive={location.pathname === item.path}
                subItems={item.subItems}
              />
            ))}
          </div>
        </div>
        <DrawerFooter className="flex flex-col gap-2 font-Poppins">
          <Button className="py-5 w-full border-0 flex gap-3 justify-start bg-transparent text-foreground text-xs shadow-none hover:bg-destructive/40">
            <ArrowLeftEndOnRectangleIcon className="w-6 h-6" />
            Log Out
          </Button>
          <DarkModeSwitch isDark={isDark} setDark={setDark} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Navbar;
