// types/next-auth.d.ts
import { User as UserType } from '@/entities/user/model/types';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: UserType & DefaultSession['user'];
  }

  interface User extends UserType {
    name: string;
  }
}

import 'next-auth/jwt';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT extends UserType {
    name: string;
  }
}
