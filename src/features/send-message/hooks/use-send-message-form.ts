import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { sendMessageSchema, SendMessageSchemaType } from '../model/send-message-schema';

const useSendMessageForm = () => {
  const form = useForm<SendMessageSchemaType>({
    resolver: zodResolver(sendMessageSchema),
    defaultValues: {
      text: '',
    },
  });

  return form;
};

export default useSendMessageForm;
