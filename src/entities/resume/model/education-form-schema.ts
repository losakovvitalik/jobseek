import { z } from 'zod';

export const educationFormSchema = z.object({
  name: z.string(),
  type: z.string(),
  year: z.string(),
});

export type EducationFormSchemaType = z.infer<typeof educationFormSchema>;
