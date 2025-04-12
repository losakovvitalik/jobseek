export const paths = {
  menu: {
    resume: '/menu/resume',
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
  posts: {
    single: (id: string) => `/posts/${id}`,
  },
};
