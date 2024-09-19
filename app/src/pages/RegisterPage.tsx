import logoTugasin from '../assets/logoTugasin.svg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import RegisterForm from '../components/forms/RegisterForm';
import { container, item } from '../animations/animations';
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';

function RegisterPage() {
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
              Register
              <span className="text-sm font-medium text-muted-foreground">
                Create your account
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 py-0">
            <RegisterForm />
          </CardContent>
          <CardFooter className="flex justify-center items-center pt-2 pb-6">
            <h1 className="text-xs font-medium text-muted-foreground">
              Already have an account?
              <span className="font-bold text-primary">
                <button
                  onClick={() => navigate('/login')}
                  className="text-blue-500 hover:underline"
                >
                  Sign In
                </button>
              </span>
            </h1>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default RegisterPage;
