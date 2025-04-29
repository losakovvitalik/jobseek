import { z } from 'zod';
import { languageFormSchema } from './language-form-schema';

export const userFormSchema = z.object({
  name: z.string().nonempty('Пожалуйста, укажите имя'),
  last_name: z.string().nonempty('Пожалуйста, укажите фамилию'),
  middle_name: z.string().optional(),
  email: z.string().nonempty('Пожалуйста, укажите почту'),
  telegram: z.string().optional(),
  phone: z.string().optional(),
  photo: z
    .object({
      url: z.string().optional(),
    })
    .optional(),
  search_status: z.string(),
  birthday: z.string(),
  gender: z.enum(['male', 'female']),
  city: z.number().optional(),
  languages: z.array(languageFormSchema.extend({
    id: z.string(),
  })),
});

export type UserFormSchemaType = z.infer<typeof userFormSchema>;
