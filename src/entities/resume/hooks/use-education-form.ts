import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { educationFormSchema, EducationFormSchemaType } from '../model/education-form-schema';

const useEducationForm = () => {
  const form = useForm<EducationFormSchemaType>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: {
      name: '',
      type: '',
      year: '',
    },
  });

  return form;
};

export default useEducationForm;
