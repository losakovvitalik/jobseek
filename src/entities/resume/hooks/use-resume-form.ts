import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { resumeFormSchema, ResumeFormSchemaType } from '../model/resume-form-schema';
import { Resume } from '../model/types';

export interface UseResumeFormProps {
  defaultValues?: Partial<Resume>;
}

const useResumeForm = ({ defaultValues }: UseResumeFormProps) => {
  const form = useForm<ResumeFormSchemaType>({
    resolver: zodResolver(resumeFormSchema),
    defaultValues: defaultValues,
  });

  return form;
};

export default useResumeForm;
