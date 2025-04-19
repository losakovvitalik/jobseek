import { z } from 'zod';

export const educationFormSchema = z.object({
  name: z.string().nonempty("Поле не может быть пустым"),
  organization: z.string(),
  type: z.string(),
  year: z.string(),
});

export type EducationFormSchemaType = z.infer<typeof educationFormSchema>;