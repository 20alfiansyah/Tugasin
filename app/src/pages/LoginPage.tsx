import logoTugasin from '../assets/logoTugasin.svg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoginForm from '../components/forms/LoginForm';
import { container, item } from '../animations/animations';
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="w-full h-dvh bg-gray-200 p-5"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={item}
        className="w-full h-full flex items-center justify-center font-Poppins"
      >
        <Card className="w-full w-full py-7">
          <CardHeader className="pt-6 pb-2">
            <CardTitle>
              <div className="flex items-center justify-center gap-2">
                <img src={logoTugasin} alt="Tugasin logo" className="w-10" />
                <h1 className="text-xl">Tugasin</h1>
              </div>
            </CardTitle>
            <CardDescription className="flex flex-col font-bold text-black text-lg">
              Login
              <span className="text-sm font-medium text-muted-foreground">
                Manage your task easily
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 py-0">
            <LoginForm />
          </CardContent>
          <CardFooter className="flex justify-center items-center pt-2 pb-6">
            <h1 className="text-xs font-medium text-muted-foreground">
              Don't have an account?{' '}
              <span className="font-bold text-primary">
                <button
                  onClick={() => navigate('/register')}
                  className="text-blue-500 hover:underline"
                >
                  Sign Up
                </button>
              </span>
            </h1>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default LoginPage;
