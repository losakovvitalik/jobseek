import { z } from 'zod';

export const userFormSchema = z.object({
  name: z.string().nonempty('Пожалуйста, укажите имя'),
  last_name: z.string().nonempty('Пожалуйста, укажите фамилию'),
  middle_name: z.string(),
  email: z.string(),
  telegram: z.string(),
  phone: z.string(),
  photo: z.string(),
  search_status: z.string(),
  birthday: z.string(),
  gender: z.string(),
});

export type UserFormSchemaType = z.infer<typeof userFormSchema>;
