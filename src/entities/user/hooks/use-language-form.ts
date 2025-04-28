import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { languageFormSchema, LanguageFormSchemaType } from '../model/language-form-schema';

interface UseLanguageFormProps {
  defaultValues?: Partial<LanguageFormSchemaType>;
}

const useLanguageForm = ({ defaultValues }: UseLanguageFormProps = {}) => {
  const form = useForm<LanguageFormSchemaType>({
    resolver: zodResolver(languageFormSchema),
    defaultValues: defaultValues,
  });

  return form;
};

export default useLanguageForm;
