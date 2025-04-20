import { z } from 'zod';

export const otpFormSchema = z.object({
  code: z.string().min(4, {
    message: 'Код должен состоять из 4 цифр.',
  }),
});

export type OtpFormSchemaType = z.infer<typeof otpFormSchema>;
