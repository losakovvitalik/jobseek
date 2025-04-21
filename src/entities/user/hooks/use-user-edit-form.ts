import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { User } from '../model/types';
import { userFormSchema, UserFormSchemaType } from '../model/user-form-schema';

interface UseUserEditFormProps {
  defaultValues?: User;
}

const useUserEditForm = ({ defaultValues }: UseUserEditFormProps = {}) => {
  const form = useForm<UserFormSchemaType>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      ...defaultValues,
      gender: defaultValues?.gender.value,
    },
  });

  return form;
};

export default useUserEditForm;
