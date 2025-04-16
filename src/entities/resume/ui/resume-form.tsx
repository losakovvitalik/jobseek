'use client';

import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input, UnitInput } from '@/shared/ui/input';
import MultiSelect from '@/shared/ui/multiselect';
import AutoHeightTextarea from '@/shared/ui/textarea';
import Typography from '@/shared/ui/typography';
import useResumeForm from '../hooks/use-resume-form';
import { ResumeFormSchemaType } from '../model/resume-form-schema';
import EducationInput from './education-input';

const ResumeForm = () => {
  const form = useResumeForm();

  function onSubmit(values: ResumeFormSchemaType) {
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
                  className="min-h-32"
                  placeholder="Расскажите о себе, чем вы занимались и к чему это привело"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferred_income"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Typography>Предпочитаемый доход</Typography>
              </FormLabel>
              <FormControl>
                <UnitInput placeholder="В каком доходе вы заинтересованы" unit="₽" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Typography>Навыки</Typography>
              </FormLabel>
              <FormControl>
                <MultiSelect
                  options={[
                    {
                      label: 'React',
                      value: 2,
                    },
                    {
                      label: 'Vue',
                      value: 3,
                    },
                    {
                      label: 'Angular',
                      value: 4,
                    },
                  ]}
                  field={field}
                  placeholder="Ваши основные навыки"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="work_schedule"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Typography>График работы</Typography>
              </FormLabel>
              <FormControl>
                <MultiSelect
                  options={[
                    {
                      label: 'Полный день',
                      value: 1,
                    },
                    {
                      label: 'Сменный график',
                      value: 2,
                    },
                    {
                      label: 'Гибкий график',
                      value: 3,
                    },
                    {
                      label: 'Удалённая работа',
                      value: 4,
                    },
                    {
                      label: 'Вахтовый метод',
                      value: 5,
                    },
                  ]}
                  field={field}
                  placeholder="Комфортный для вас график работы"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="employment_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Typography>Тип занятности</Typography>
              </FormLabel>
              <FormControl>
                <MultiSelect
                  options={[
                    {
                      label: 'Полная занятость',
                      value: 1,
                    },
                    {
                      label: 'Частичная занятость',
                      value: 2,
                    },
                    {
                      label: 'Проектная занятость',
                      value: 3,
                    },
                    {
                      label: 'Волонтёрство',
                      value: 4,
                    },
                    {
                      label: 'Стажировка',
                      value: 5,
                    },
                  ]}
                  field={field}
                  placeholder="Предпочитаемые типы занятости"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Typography>Тип занятности</Typography>
              </FormLabel>
              <FormControl>
                <EducationInput field={field} />
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

export default ResumeForm;
