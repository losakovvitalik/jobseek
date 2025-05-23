import { z } from 'zod';

export const educationFormSchema = z.object({
  name: z.string().nonempty('Поле не может быть пустым'),
  organization: z.string().optional(),
  type: z.enum(['course', 'university']).optional(),
  year: z.string().optional(),
});

export type EducationFormSchemaType = z.infer<typeof educationFormSchema>;
