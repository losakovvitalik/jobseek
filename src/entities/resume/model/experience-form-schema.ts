import { z } from 'zod';

export const ExperienceFormSchema = z.object({
  organization: z.string().max(50, 'Максимум 50 символов'),
  city: z.string().max(50, 'Максимум 50 символов'),
  position: z.string(),
  start_date: z.string(),
  end_date: z.string(),
  description: z.string(),
});
