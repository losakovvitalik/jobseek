export const paths = {
  menu: {
    resumes: '/menu/resumes',
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
  messagesLink: '/messages',
  jobsLink: '/jobs',
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
  resume: {
    single: (id: string) => `/resumes/${id}`,
    edit: (id: string) => `/resumes/${id}/edit`,
  },
};
