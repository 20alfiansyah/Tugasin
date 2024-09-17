import { useState } from 'react';
import iconUsername from '../../assets/iconUsername.svg';
import iconDanger from '../../assets/iconDanger.svg';
import iconPassword from '../../assets/iconPassword.svg';
import iconEye from '../../assets/iconEye.svg';
import iconEyeSlash from '../../assets/iconEyeSlash.svg';
import loading from '../../assets/loading.svg';
import { item } from '../../animations/animations';
import { loginSchema } from '../../validation/validationSchema';
import { loginInitialValues } from '../../validation/validationInitialValue';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface LoginState {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik<LoginState>({
    initialValues: loginInitialValues,
    onSubmit: async (values, action) => {
      const url: RequestInfo = 'http://localhost:8000/api/auth/login';
      try {
        setShowLoading(true);
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (response.ok) {
          setShowLoading(false);
          action.resetForm;
          localStorage.setItem('token', data.data.accessToken);
          alert('Login successful! Token stored in localStorage.');
          navigate('/home');
        } else {
          setShowLoading(false);
          console.log(await response.json);
        }
      } catch (error) {
        if (error instanceof Error) {
          setShowLoading(false);
          console.log(error);
        }
      }
    },
    validationSchema: loginSchema,
  });
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
        className="mt-3 flex flex-col gap-3"
      >
        <motion.div className="flex flex-col gap-4" variants={item}>
          <label className="flex items-center font-medium">Username</label>
          <div className="w-full flex relative items-center">
            <img src={iconUsername} className="ml-3 w-6 opacity-40" alt="" />
            <input
              onChange={formik.handleChange}
              value={formik.values.username}
              type="text"
              name="username"
              placeholder="Enter your username"
              className={`absolute w-full rounded-full pl-12 pr-5 py-3 bg-black bg-opacity-5 text-sm focus:outline-none  ${
                formik.errors.username && formik.touched.username
                  ? 'border-2 border-red-600'
                  : 'focus:ring-2 focus:ring-blue-700 focus:border-blue-700'
              }`}
            />
          </div>
          {formik.errors.username && formik.touched.username && (
            <div className="flex gap-1 items-center">
              <img src={iconDanger} alt="" className="w-4" />
              <p className="text-red-500 text-xs">{formik.errors.username}</p>
            </div>
          )}
        </motion.div>
        <motion.div className="flex flex-col gap-4" variants={item}>
          <label className="flex items-center font-medium">Password</label>
          <div className="w-full flex relative items-center">
            <img src={iconPassword} className="ml-3 w-5 opacity-40" alt="" />
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              type={textVisible ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              className={`absolute w-full rounded-full px-12 py-3 text-sm bg-black bg-opacity-5 focus:outline-none  ${
                formik.errors.password && formik.touched.password
                  ? 'border-2 border-red-600'
                  : 'focus:ring-2 focus:ring-blue-700 focus:border-blue-700'
              }`}
            />
            <div className="w-full flex items-center justify-end">
              <button
                type="button"
                onClick={() => setTextVisible(!textVisible)}
              >
                <img
                  src={textVisible ? iconEye : iconEyeSlash}
                  className="mr-3 w-5 opacity-40"
                  alt=""
                />
              </button>
            </div>
          </div>
          {formik.errors.password && formik.touched.password && (
            <div className="flex gap-1 items-center">
              <img src={iconDanger} alt="" className="w-4" />
              <p className="text-red-500 text-xs">{formik.errors.password}</p>
            </div>
          )}
        </motion.div>
        <motion.button
          className="w-full flex justify-center gap-2 items-center py-2 mt-2 bg-gradient-to-b from-blue-700 to-blue-700 text-white rounded-full font-bold"
          variants={item}
          type="submit"
        >
          Sign In
          {showLoading === true ? (
            <span>
              <img src={loading} alt="" className="w-5" />
            </span>
          ) : null}
        </motion.button>
      </form>
    </>
  );
};
export default LoginForm;
