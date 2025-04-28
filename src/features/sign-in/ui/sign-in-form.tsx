'use client';
import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import Typography from '@/shared/ui/typography';
import { useRouter } from 'next/navigation';
import useSignInForm from '../hooks/use-sign-in-form';
import { SignInFormSchemaType } from '../models/sign-in-form-schema';

const SignInForm = () => {
  const form = useSignInForm();
  const router = useRouter();

  const onSubmit = (value: SignInFormSchemaType) => {
    router.push(`/auth/code?email=${value.email}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Typography>Email</Typography>
              </FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className={'w-full mt-4'}>Войти</Button>
      </form>
    </Form>
  );
};

export default SignInForm;
