import { paths } from '@/lib/paths';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JobSeek',
    short_name: 'JobSeek',
    description: 'Приложение для поиска вакансий и сотрудников',
    start_url: paths.vacancies.link,
    display: 'standalone',
    background_color: '#ccc',
    theme_color: '#ccc',
    icons: [
      {
        src: '/pwa/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
