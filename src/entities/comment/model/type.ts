import { User } from '@/entities/user/model/types';

export interface Comment {
  text: string;
  user: Pick<User, 'name' | 'photo'>;
}
