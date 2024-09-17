import { useState } from 'react';
import iconUsername from '../../assets/iconUsername.svg';
import iconDanger from '../../assets/iconDanger.svg';
import iconEmail from '../../assets/iconEmail.svg';
import iconPassword from '../../assets/iconPassword.svg';
import iconEye from '../../assets/iconEye.svg';
import iconEyeSlash from '../../assets/iconEyeSlash.svg';
import loading from '../../assets/loading.svg';
import { item } from '../../animations/animations';
import { signUpSchema } from '../../validation/validationSchema';
import { signUpInitialValues } from '../../validation/validationInitialValue';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
interface FormSignUpState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik<FormSignUpState>({
    initialValues: signUpInitialValues,
    onSubmit: async (values, action) => {
      const url: RequestInfo = 'http://localhost:8000/api/auth/register';
      try {
        setShowLoading(true);
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          setShowLoading(false);
          action.resetForm;
          console.log(await response.json);
          navigate('/login');
        }
      } catch (error) {
        if (error instanceof Error) {
          setShowLoading(false);
          console.log(error);
        }
      }
    },
    validationSchema: signUpSchema,
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
          <label className="flex items-center font-medium">Email</label>
          <div className="w-full flex relative items-center">
            <img src={iconEmail} className="ml-3 w-6 opacity-40" alt="" />
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`absolute w-full rounded-full pl-12 pr-5 py-3 bg-black bg-opacity-5 text-sm focus:outline-none  ${
                formik.errors.email && formik.touched.email
                  ? 'border-2 border-red-600'
                  : 'focus:ring-2 focus:ring-blue-700 focus:border-blue-700'
              }`}
            />
          </div>
          {formik.errors.email && formik.touched.email && (
            <div className="flex gap-1 items-center">
              <img src={iconDanger} alt="" className="w-4" />
              <p className="text-red-500 text-xs">{formik.errors.email}</p>
            </div>
          )}
        </motion.div>
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
        <motion.div className="flex flex-col gap-4" variants={item}>
          <label className="flex items-center font-medium">
            Confirm Password
          </label>
          <div className="w-full flex relative items-center">
            <img src={iconPassword} className="ml-3 w-5 opacity-40" alt="" />
            <input
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              type={textVisible ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm your password"
              className={`absolute w-full rounded-full px-12 py-3 text-sm bg-black bg-opacity-5 focus:outline-none  ${
                formik.errors.confirmPassword && formik.touched.confirmPassword
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
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <div className="flex gap-1 items-center">
              <img src={iconDanger} alt="" className="w-4" />
              <p className="text-red-500 text-xs">
                {formik.errors.confirmPassword}
              </p>
            </div>
          )}
        </motion.div>
        <motion.button
          className="w-full flex justify-center gap-2 items-center py-2 mt-2 bg-gradient-to-b from-blue-700 to-blue-700 text-white rounded-full font-bold"
          variants={item}
          type="submit"
        >
          Sign Up
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

export default SignUpForm;
