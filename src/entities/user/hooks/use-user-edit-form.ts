import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { userFormSchema, UserFormSchemaType } from '../model/user-form-schema';

interface UseUserEditFormProps {
  defaultValues?: Partial<UserFormSchemaType>;
}

const useUserEditForm = ({ defaultValues }: UseUserEditFormProps = {}) => {
  const form = useForm<UserFormSchemaType>({
    resolver: zodResolver(userFormSchema),
  });

  useEffect(() => {
    form.reset(defaultValues);
  }, [form, defaultValues]);

  return form;
};

export default useUserEditForm;
