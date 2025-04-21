'use client';

import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { UnitInput } from '@/shared/ui/input';
import AutoHeightTextarea from '@/shared/ui/textarea';
import Typography from '@/shared/ui/typography';
import useResumeForm from '../hooks/use-resume-form';
import { ResumeFormSchemaType } from '../model/resume-form-schema';
import EducationInput from './education-input';
import ExperienceInput from './experience-input';
import ResumeEmploymentTypeSelect from './resume-employment-type-select';
import ResumeSkillsSelect from './resume-skills-select';
import ResumeWorkScheduleSelect from './resume-work-schedule-select';

const ResumeForm = () => {
  const form = useResumeForm();

  function onSubmit(values: ResumeFormSchemaType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 pb-6" onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardContent className="flex flex-col gap-4">
            <Typography variant={'subtitle'}>Основная информация</Typography>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>Профессия</Typography>
                  </FormLabel>
                  <FormControl>
                    <AutoHeightTextarea
                      placeholder="На какую профессию вы устраиваитесь"
                      {...field}
                    />
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
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>Опыт работы</Typography>
                  </FormLabel>
                  <FormControl>
                    <ExperienceInput field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4">
            <Typography variant={'subtitle'}>Пожелания по условиям</Typography>
            <FormField
              control={form.control}
              name="work_schedule"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>График работы</Typography>
                  </FormLabel>
                  <FormControl>
                    <ResumeWorkScheduleSelect {...field} />
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
                    <ResumeEmploymentTypeSelect {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4">
            <Typography variant={'subtitle'}>Дополнительная информация</Typography>
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>Навыки</Typography>
                  </FormLabel>
                  <FormControl>
                    <ResumeSkillsSelect {...field} />
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
          </CardContent>
        </Card>

        <Button className="w-full" type="submit">
          Создать резюме
        </Button>
      </form>
    </Form>
  );
};

export default ResumeForm;
