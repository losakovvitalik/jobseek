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
      city: defaultValues?.city?.id,
      languages: defaultValues?.languages?.map((lang) => ({
        id: lang.id,
        language_id: lang.language_id,
        level: {
          id: lang.level.id,
        },
      })),
    },
  });

  return form;
};

export default useUserEditForm;
