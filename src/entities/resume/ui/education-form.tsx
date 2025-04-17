import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import AutoHeightTextarea from '@/shared/ui/textarea';
import Typography from '@/shared/ui/typography';
import useEducationForm from '../hooks/use-education-form';
import { EducationFormSchemaType } from '../model/education-form-schema';
import EducationTypeSelect from './education-type-select';

export interface EducationFormProps {
  onSubmit?: (values: EducationFormSchemaType) => void;
}

const EducationForm = ({ onSubmit }: EducationFormProps) => {
  const form = useEducationForm();

  const submit = (values: EducationFormSchemaType) => {
    onSubmit?.(values);
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="mt-4 flex flex-col gap-4"
          onSubmit={(e) => {
            e.stopPropagation();
            form.handleSubmit(submit)(e);
          }}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Typography size={'sm'}>Название курса или специальности</Typography>
                </FormLabel>
                <FormControl>
                  <AutoHeightTextarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Typography size={'sm'}>Тип образования</Typography>
                </FormLabel>
                <FormControl>
                  <EducationTypeSelect {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Typography size={'sm'}>Организация</Typography>
                </FormLabel>
                <FormControl>
                  <AutoHeightTextarea placeholder="Наименование организации" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Typography size={'sm'}>Год окончания</Typography>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription className="text-left leading-4">
                  Если вы ещё не окончили обучение, укажите предполагаемый год окончания
                </FormDescription>
              </FormItem>
            )}
          />

          <Button className="mt-4 w-full" type="submit" disabled={!form.formState.isValid}>
            Добавить образование
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EducationForm;
