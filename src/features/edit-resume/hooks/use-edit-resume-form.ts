import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { editResumeSchema, EditResumeSchemaType } from '../model/edit-resume-schema';

const useEditResumeForm = () => {
  const form = useForm<EditResumeSchemaType>({
    resolver: zodResolver(editResumeSchema),
    defaultValues: {
      name: '',
      description: '',
      education: '',
    },
  });

  return form;
};

export default useEditResumeForm;
