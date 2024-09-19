import { useState } from 'react';
import { registerSchema } from '../../validation/validationSchema';
import { registerInitialValues } from '../../validation/validationInitialValue';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import loading from '../../assets/loading.svg';
import {
  UserIcon,
  AtSymbolIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';

const RegisterForm = () => {
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: registerInitialValues,
    mode: 'onChange', // Validate on every change
  });

  const { handleSubmit, control, trigger } = form;

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    const url: RequestInfo = 'http://localhost:8000/api/auth/register';
    setShowLoading(true);
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
        navigate('/login');
      } else {
        setShowLoading(false);
        console.log(data);
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: data.message,
          action: <ToastAction altText="Close">Close</ToastAction>,
        });
      }
    } catch (error) {
      console.log('yes');
      if (error instanceof Error) {
        setShowLoading(false);
        console.log(error);
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormField
            control={control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    id="username"
                    leftAddon={<UserIcon className="w-5 h-5 text-gray-500" />}
                    placeholder="Username"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      trigger('username'); // Validate the field on change
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    leftAddon={
                      <AtSymbolIcon className="w-5 h-5 text-gray-500" />
                    }
                    placeholder="Email"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      trigger('email'); // Validate the field on change
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="password"
                      type="password"
                      leftAddon={
                        <LockClosedIcon className="w-5 h-5 text-gray-500" />
                      }
                      placeholder="Password"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        trigger('password'); // Validate the field on change
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    id="confirmPassword"
                    type="password"
                    leftAddon={
                      <LockClosedIcon className="w-5 h-5 text-gray-500" />
                    }
                    placeholder="Confirm Password"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      trigger('confirmPassword'); // Validate the field on change
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full flex items-center gap-2 mt-1">
            Register
            <span>
              {showLoading === true ? (
                <img src={loading} alt="" className="w-5" />
              ) : (
                <></>
              )}
            </span>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default RegisterForm;
