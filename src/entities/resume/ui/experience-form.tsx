import CitySelect from '@/entities/city/ui/city-select';
import { Button } from '@/shared/ui/button';
import ConfirmPopup from '@/shared/ui/confirm-popup';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { ListInputFormProps } from '@/shared/ui/list-input';
import AutoHeightTextarea from '@/shared/ui/textarea';
import Typography from '@/shared/ui/typography';
import YearMonthInput from '@/shared/ui/year-month-input';
import useExperienceForm from '../hooks/use-experience-form';
import { ExperienceFormSchemaType } from '../model/experience-form-schema';
import { Experience } from '../model/types';

const ExperienceForm = (props: ListInputFormProps<Experience>) => {
  const { mode } = props;
  const isEditMode = mode === 'edit';

  const form = useExperienceForm({
    defaultValues: isEditMode ? props.defaultValues : undefined,
  });

  const submit = (values: ExperienceFormSchemaType) => {
    const payload: Experience = {
      id: isEditMode ? props.defaultValues.id : crypto.randomUUID(),
      ...values,
    };
    props.onSubmit(payload);
  };

  return (
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
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>
                <Typography size={'sm'}>Позиция</Typography>
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
          name="organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>
                <Typography size={'sm'}>Организация/компания</Typography>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="start_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>
                <Typography size={'sm'}>Начало работы</Typography>
              </FormLabel>
              <FormControl>
                <YearMonthInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="end_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>
                <Typography size={'sm'}>Конец работы</Typography>
              </FormLabel>
              <FormControl>
                <YearMonthInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Typography size={'sm'}>Город</Typography>
              </FormLabel>
              <FormControl>
                <CitySelect {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Typography size={'sm'}>Описание</Typography>
              </FormLabel>
              <FormControl>
                <AutoHeightTextarea
                  placeholder="Опишите чем вы занимались и к чему это привело"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-4 grid grid-cols-[auto_1fr] gap-4">
          {isEditMode && (
            <ConfirmPopup
              onConfirm={() => props.onRemove(props.defaultValues.id)}
              title="Вы уверены что хотите удалить опыт работы?"
              description={props.defaultValues.position}
            >
              <Button type="button" variant={'destructive'}>
                Удалить
              </Button>
            </ConfirmPopup>
          )}
          <Button type="submit">
            {isEditMode ? 'Изменить опыт работы' : 'Добавить опыт работы'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ExperienceForm;
