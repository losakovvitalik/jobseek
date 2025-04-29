import { ElementType } from '@/shared/types/element-type';
import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { ListInputFormProps } from '@/shared/ui/list-input';
import Typography from '@/shared/ui/typography';
import useLanguageForm from '../hooks/use-language-form';
import { LanguageFormSchemaType } from '../model/language-form-schema';
import { UserFormSchemaType } from '../model/user-form-schema';
import LanguageFormLevelSelect from './language-form-level-select';
import LanguageFormSelect from './language-select';

const LanguageForm = (props: ListInputFormProps<ElementType<UserFormSchemaType['languages']>>) => {
  const { mode } = props;
  const isEditMode = mode === 'edit';

  const form = useLanguageForm({
    defaultValues: isEditMode ? props.defaultValues : undefined,
  });

  const submit = (values: LanguageFormSchemaType) => {
    const payload = {
      id: isEditMode ? props.defaultValues.id : crypto.randomUUID(),
      language_id: values.language_id,
      level: {
        id: values.level.id,
      },
    };

    props.onSubmit(payload);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          form.handleSubmit(submit)(e);
        }}
      >
        <div className="grid grid-cols-[2fr_1fr] gap-2">
          <FormField
            control={form.control}
            name="language_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>
                  <Typography size={'sm'}>Язык</Typography>
                </FormLabel>
                <FormControl>
                  <LanguageFormSelect {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="level.id"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>
                  <Typography size={'sm'}>Уровень</Typography>
                </FormLabel>
                <FormControl>
                  <LanguageFormLevelSelect {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button>{isEditMode ? 'Изменить язык' : 'Добавить язык'}</Button>
      </form>
    </Form>
  );
};

export default LanguageForm;
