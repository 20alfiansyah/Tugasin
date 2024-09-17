import logoTugasin from '../assets/logoTugasin.svg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SignUpForm from '../components/forms/SignUpForm';
import { container, item } from '../animations/animations';

function SignUpPage() {
  const navigate = useNavigate();

  //Motion

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
            <h1 className="font-bold text-lg">Sign Up</h1>
            <p className="font-normal text-sm opacity-45">
              Create your account
            </p>
            <SignUpForm />
            <motion.div
              className="flex items-center justify-center m-3 text-xs font-medium gap-1"
              variants={item}
            >
              <p>Already Have an account?</p>
              <button
                className="font-bold text-blue-700"
                onClick={() => navigate('/login')}
              >
                Sign In
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default SignUpPage;
