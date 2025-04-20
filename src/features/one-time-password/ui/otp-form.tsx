'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/shared/ui/input-otp';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { otpFormSchema, OtpFormSchemaType } from '../model/otp-form-schema';

const OtpForm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const form = useForm<OtpFormSchemaType>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {},
  });

  const onSubmit = (data: OtpFormSchemaType) => {
   if (email) {
      signIn('credentials', {
        email: email,
        code: data.code,
        redirectTo: '/jobs'
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mt-6 flex flex-col items-center space-y-2"
      >
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Код</FormLabel>
              <FormControl>
                <InputOTP maxLength={4} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mt-4 w-48" type="submit">
          Отправить
        </Button>
      </form>
    </Form>
  );
};

export default OtpForm;
