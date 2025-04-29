import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        code: {},
      },
      authorize: (credentials) => {
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        const { email, code } = credentials as { email: string; code: string };

        if (email === 'losakovvitalik@gmail.com' && code === '1122') {
          return {
            email: 'losakovvitalik@gmail.com',
            name: 'Виталий',
            last_name: 'Лосяков',
            middle_name: 'Витальевич',
            birthday: '2005-08-23T00:00:00.000Z',
            search_status: 'active',
            telegram: '@powerofweb',
            phone: '79932734793',
            photo: {
              url: '/avatar-placeholder.png',
            },
            gender: {
              value: 'male',
              label: 'Мужской',
            },
            city: {
              id: 1,
              name: 'Москва',
            },
            languages: [
              {
                id: '81c6682b-4368-4e8a-ba38-c6ca54d5ca54',
                language_id: 1,
                label: 'Русский',
                level: {
                  id: 6,
                  label: 'C2',
                },
              },
              {
                id: 'c9457236-21d5-4c2d-9f1e-168a78fcdb1b',
                language_id: 2,
                label: 'Английский',
                level: {
                  id: 4,
                  label: 'B2',
                },
              },
            ],
          };
        } else {
          throw new Error('Invalid credentials.');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.last_name = user.last_name;
        token.middle_name = user.middle_name;
        token.birthday = user.birthday;
        token.search_status = user.search_status;
        token.telegram = user.telegram;
        token.phone = user.phone;
        token.photo = user.photo;
        token.gender = user.gender;
        token.city = user.city;
        token.languages = user.languages;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.name = token.name;
      session.user.last_name = token.last_name;
      session.user.middle_name = token.middle_name;
      session.user.birthday = token.birthday;
      session.user.search_status = token.search_status;
      session.user.telegram = token.telegram;
      session.user.phone = token.phone;
      session.user.photo = token.photo;
      session.user.gender = token.gender;
      session.user.city = token.city;
      session.user.languages = token.languages;
      return session;
    },
  },
  pages: {
    signIn: '/auth',
  },
});
