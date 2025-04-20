// types/next-auth.d.ts
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      name: string;
      last_name: string;
      middle_name?: string;
      email: string;
      telegram?: string;
      phone?: string;
      birthday?: string;
      search_status?: 'active' | 'considering' | 'inactive';
      photo?: {
        url: string;
      };
      gender: {
        value: 'female' | 'male';
        label: string;
      };
    } & DefaultSession['user'];
  }

  interface User {
    name: string;
    last_name: string;
    middle_name?: string;
    email: string;
    telegram?: string;
    phone?: string;
    birthday?: string;
    search_status?: 'active' | 'considering' | 'inactive';
    photo?: {
      url: string;
    };
    gender: {
      value: 'female' | 'male';
      label: string;
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt"
 
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    name: string;
    last_name: string;
    middle_name?: string;
    email: string;
    telegram?: string;
    phone?: string;
    birthday?: string;
    search_status?: 'active' | 'considering' | 'inactive';
    photo?: {
      url: string;
    };
    gender: {
      value: 'female' | 'male';
      label: string;
    };
  }
}