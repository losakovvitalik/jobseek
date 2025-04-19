import { z } from 'zod';
import { educationDtoSchema } from '../api/education-dto-schema';

export const resumeFormSchema = z.object({
  name: z.string().max(100),
  description: z.string().max(500),
  skills: z.array(z.number()),
  work_schedule: z.array(z.number()),
  employment_type: z.array(z.number()),
  preferred_income: z.number(),
  education: z.array(
    educationDtoSchema.extend({
      id: z.string(),
    }),
  ),
  link: z.string(),
});

export type ResumeFormSchemaType = z.infer<typeof resumeFormSchema>;
