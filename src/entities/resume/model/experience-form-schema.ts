import { z } from 'zod';

export const experienceFormSchema = z.object({
  organization: z.string().max(50, 'Максимум 50 символов'),
  city: z.number().optional(),
  position: z.string().nonempty('Укажите позицию на которой вы работали'),
  start_date: z.string().nonempty('Укажите дату начала работы'),
  end_date: z.string().nonempty('Укажите дату окончания работы'),
  description: z.string().optional(),
});

export type ExperienceFormSchemaType = z.infer<typeof experienceFormSchema>;
