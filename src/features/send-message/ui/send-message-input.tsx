'use client';

import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Send } from 'lucide-react';
import useSendMessageForm from '../hooks/use-send-message-form';
import { SendMessageSchemaType } from '../model/send-message-schema';

const SendMessageInput = () => {
  const form = useSendMessageForm();

  const onSubmit = (values: SendMessageSchemaType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form className="grid grid-cols-[1fr_auto] gap-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Сообщение..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          <Send />
        </Button>
      </form>
    </Form>
  );
};

export default SendMessageInput;
