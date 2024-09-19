import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z.string().email('Invalid email format').min(1, 'Email is required'),
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters')
      .min(1, 'Username is required'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(16, 'Password cannot be more than 16 characters long')
      .regex(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
        'Password must contain one letter, one number, and one special character',
      ),
    confirmPassword: z.string().min(1, 'Confirm Password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'], // Sets the path for the error
  });

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});
