import logoTugasin from '../assets/logoTugasin.svg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SignInForm from '../components/forms/SignInForm';
import { container, item } from '../animations/animations';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-dvh px-5 py-10 bg-gray-200 flex justify-center items-center text-black font-Poppins">
        <motion.div
          className="w-full px-8 py-10 bg-white rounded-xl flex-col shadow-lg"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full flex items-center justify-center gap-2"
            variants={item}
          >
            <img src={logoTugasin} alt="" className="w-10" />
            <h1 className="font-bold text-xl">Tugasin</h1>
          </motion.div>
          <motion.div className="py-5" variants={item}>
            <h1 className="font-bold text-lg">Login</h1>
            <p className="font-normal text-sm opacity-45">
              Manage you daily task easily
            </p>
            <SignInForm />
            <motion.div
              className="flex items-center justify-center m-3 text-xs font-medium gap-1"
              variants={item}
            >
              <p>Don't Have An Account?</p>
              <button
                className="font-bold text-blue-700"
                onClick={() => navigate('/register')}
              >
                Sign Up
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default LoginPage;
