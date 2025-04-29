import { z } from 'zod';
import { educationFormSchema } from './education-form-schema';
import { experienceFormSchema } from './experience-form-schema';

export const resumeFormSchema = z.object({
  name: z.string().max(100, 'Значение не может превышать 100 символов'),
  description: z.string().max(500, 'Значение не может превышать 500 символов'),
  skills: z.array(z.string()),
  work_schedule: z.array(z.number()),
  employment_type: z.array(z.number()),
  preferred_income: z.number(),
  education: z.array(
    educationFormSchema.extend({
      id: z.string(),
    }),
  ),
  experience: z.array(
    experienceFormSchema.extend({
      id: z.string(),
    }),
  ),
  link: z.string().optional(),
});

export type ResumeFormSchemaType = z.infer<typeof resumeFormSchema>;
