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
import { ListInputFormProps } from '@/shared/ui/list-input';
import { AutoHeightTextarea} from '@/shared/ui/textarea';
import Typography from '@/shared/ui/typography';
import useEducationForm from '../hooks/use-education-form';
import { EducationFormSchemaType } from '../model/education-form-schema';
import { Education } from '../model/types';
import EducationTypeSelect from './education-type-select';
import ConfirmPopup from '@/shared/ui/confirm-popup';

const EducationForm = (props: ListInputFormProps<Education>) => {
  const { mode } = props;
  const isEditMode = mode === 'edit';

  const form = useEducationForm({
    defaultValues: isEditMode ? props.defaultValues : undefined,
  });

  const submit = (values: EducationFormSchemaType) => {
    const payload: Education = {
      id: isEditMode ? props.defaultValues.id : crypto.randomUUID(),
      ...values,
    };
    props.onSubmit(payload);
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
                <FormLabel required>
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

          <div className="mt-4 grid grid-cols-[auto_1fr] gap-4">
            {isEditMode && (
              <ConfirmPopup
                onConfirm={() => props.onRemove(props.defaultValues.id)}
                title="Вы уверены что хотите удалить образование?"
                description={props.defaultValues.name}
              >
                <Button type="button" variant={'destructive'}>
                  Удалить
                </Button>
              </ConfirmPopup>
            )}
            <button type="submit" disabled={!form.formState.isValid}>
              {isEditMode ? 'Изменить образование' : 'Добавить образование'}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EducationForm;
