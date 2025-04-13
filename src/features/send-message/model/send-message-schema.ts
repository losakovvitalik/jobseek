'use client';

import { z } from 'zod';

export const sendMessageSchema = z.object({
  text: z.string(),
});

export type SendMessageSchemaType = z.infer<typeof sendMessageSchema>;
