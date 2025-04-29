import { z } from 'zod';

export const languageFormSchema = z.object({
  language_id: z.number(),
  level: z.object({
    id: z.number(),
  }),
});

export type LanguageFormSchemaType = z.infer<typeof languageFormSchema>;
