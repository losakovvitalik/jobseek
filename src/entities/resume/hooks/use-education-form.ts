import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { educationFormSchema, EducationFormSchemaType } from '../model/education-form-schema';

interface UseEducationFormProps {
  defaultValues?: Partial<EducationFormSchemaType>;
}

const useEducationForm = ({ defaultValues }: UseEducationFormProps = {}) => {
  const form = useForm<EducationFormSchemaType>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: {
      name: '',
      type: '',
      year: '',
      organization: '',
    },
  });

  useEffect(() => {
    form.reset(defaultValues);
  }, [form, defaultValues]);

  return form;
};

export default useEducationForm;
