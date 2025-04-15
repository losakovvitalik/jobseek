'use client';

import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import AutoHeightTextarea from '@/shared/ui/textarea';
import Typography from '@/shared/ui/typography';
import useEditResumeForm from '../hooks/use-edit-resume-form';
import { EditResumeSchemaType } from '../model/edit-resume-schema';

const EditResumeForm = () => {
  const form = useEditResumeForm();

  function onSubmit(values: EditResumeSchemaType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Typography>Должность</Typography>
              </FormLabel>
              <FormControl>
                <Input placeholder="На какую должность вы рассчитываете" {...field} />
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
                <Typography>О себе</Typography>
              </FormLabel>
              <FormControl>
                <AutoHeightTextarea
                  className='min-h-32'
                  placeholder="Расскажите о себе, чем вы занимались и к чему это привело"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Сохранить</Button>
      </form>
    </Form>
  );
};

export default EditResumeForm;
