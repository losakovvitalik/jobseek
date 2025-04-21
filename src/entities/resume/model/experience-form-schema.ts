import { z } from 'zod';

export const experienceFormSchema = z.object({
  position: z.string({
    required_error: 'Укажите позицию на которой вы работали',
  }),
  organization: z
    .string({
      required_error: 'Укажите организацию в которой вы работали',
    })
    .max(50, 'Максимум 50 символов'),
  start_date: z.string({
    required_error: 'Укажите дату начала работы',
  }),
  end_date: z.string({
    required_error: 'Укажите дату окончания работы',
  }),
  description: z.string().optional(),
  city: z.number().optional(),
});

export type ExperienceFormSchemaType = z.infer<typeof experienceFormSchema>;
