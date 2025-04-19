import { z } from 'zod';
import { educationFormSchema } from '../model/education-form-schema';

export const educationDtoSchema = educationFormSchema.extend({
  id: z.string().uuid().optional(),
});

export type EducationDto = z.infer<typeof educationDtoSchema>;
