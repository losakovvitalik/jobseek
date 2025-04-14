import { z } from 'zod';

export const editResumeSchema = z.object({
  name: z.string().max(100),
  description: z.string(),
  skills: z.array(z.string()),
  email: z.string(),
  phone: z.string(),
  work_schedule: z.string(),
  employment_type: z.string(),
  preferred_income: z.string(),
  education: z.string(),
  link: z.string(),
});

export type EditResumeSchemaType = z.infer<typeof editResumeSchema>;
