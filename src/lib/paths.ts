export const paths = {
  menu: {
    applications: '/menu/applications',
    favorites: '/menu/favorites',
    settings: '/menu/settings',
    notifications: '/menu/notifications',
    agreement: '/menu/agreement',
    contact: '/menu/contact',
  },
  searchLink: '/search',
  postsLink: '/posts',
  menuLink: '/menu',
  jobsLink: '/jobs',
  me: {
    edit: '/me/edit',
  },
  chat: {
    link: '/chats',
    single: (id: string) => `/chats/${id}`,
  },
  companies: {
    single: (id: string) => `/companies/${id}`,
  },
  vacancies: {
    link: '/vacancies',
    single: (id: string) => `/vacancies/${id}`,
  },
  posts: {
    single: (id: string) => `/posts/${id}`,
  },
  resumes: {
    my: '/resumes/my',
    single: (id: string) => `/resumes/${id}`,
    edit: (id: string) => `/resumes/${id}/edit`,
  },
  auth: {
    link: '/auth',
    code: '/auth/code',
  },
};
