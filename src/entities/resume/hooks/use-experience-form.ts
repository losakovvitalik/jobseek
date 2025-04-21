import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { experienceFormSchema, ExperienceFormSchemaType } from '../model/experience-form-schema';

interface UseExperienceFormProps {
  defaultValues?: Partial<ExperienceFormSchemaType>;
}

const useExperienceForm = ({ defaultValues }: UseExperienceFormProps = {}) => {
  const form = useForm<ExperienceFormSchemaType>({
    resolver: zodResolver(experienceFormSchema),
    defaultValues: defaultValues,
  });

  return form;
};

export default useExperienceForm;
