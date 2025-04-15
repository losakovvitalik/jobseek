import { z } from 'zod';

export const resumeFormSchema = z.object({
  name: z.string().max(100),
  description: z.string().max(500),
  skills: z.array(
    z.object({
      label: z.string(),
      value: z.number(),
    }),
  ),
  work_schedule: z.array(
    z.object({
      label: z.string(),
      value: z.number(),
    }),
  ),
  employment_type: z.array(
    z.object({
      label: z.string(),
      value: z.number(),
    }),
  ),
  preferred_income: z.number(),
  education: z.string(),
  link: z.string(),
});

export type ResumeFormSchemaType = z.infer<typeof resumeFormSchema>;
