'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { signInFormSchema, SignInFormSchemaType } from '../models/sign-in-form-schema';

interface UseSignInFormProps {
  defaultValues?: Partial<SignInFormSchemaType>;
}

const useSignInForm = ({ defaultValues }: UseSignInFormProps = {}) => {
  const stableDefaults = useMemo(() => defaultValues, [JSON.stringify(defaultValues)]);

  const form = useForm<SignInFormSchemaType>({
    resolver: zodResolver(signInFormSchema),
  });

  useEffect(() => {
    if (stableDefaults) {
      form.reset(stableDefaults);
    }
  }, [form, stableDefaults]); // Убираем form из зависимостей

  return form;
};

export default useSignInForm;
