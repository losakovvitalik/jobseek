import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z.string(),
});

export type SignInFormSchemaType = z.infer<typeof signInFormSchema>;
