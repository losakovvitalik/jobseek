import { z } from 'zod';

export const languageFormSchema = z.object({
  id: z.number(),
  level: z.object({
    id: z.number(),
  }),
});

export type LanguageFormSchemaType = z.infer<typeof languageFormSchema>;
