import { Button } from '@/shared/ui/button';
import ConfirmPopup from '@/shared/ui/confirm-popup';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { ListInputFormProps } from '@/shared/ui/list-input';
import AutoHeightTextarea from '@/shared/ui/textarea';
import Typography from '@/shared/ui/typography';
import useExperienceForm from '../hooks/use-experience-form';
import { ExperienceFormSchemaType } from '../model/experience-form-schema';
import { Experience } from '../model/types';
import CitySelect from '@/entities/city/ui/city-select';

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
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>
                  <Typography size={'sm'}>Позиция на которой вы работали</Typography>
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
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>
                  <Typography size={'sm'}>Город в котором вы работали</Typography>
                </FormLabel>
                <FormControl>
                  <CitySelect {...field} />
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
            <Button type="submit" disabled={!form.formState.isValid}>
              {isEditMode ? 'Изменить опыт работы' : 'Добавить опыт работы'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ExperienceForm;
