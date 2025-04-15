import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { resumeFormSchema, ResumeFormSchemaType } from '../model/resume-form-schema';

const useResumeForm = () => {
  const form = useForm<ResumeFormSchemaType>({
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      name: '',
      description: '',
      education: '',
    },
  });

  return form;
};

export default useResumeForm;
