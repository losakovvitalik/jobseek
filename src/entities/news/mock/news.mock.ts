import { News } from '../types/news';

export const mockNews: News[] = [
  {
    id: 'news-1',
    title: 'Топ-5 навыков для IT-специалистов в 2024 году',
    excerpt:
      'Эксперты составили список самых востребованных навыков в сфере информационных технологий на текущий год.',
    tags: ['Карьера', 'IT', 'Тренды'],
    author: {
      name: 'Иван Петров',
      image_url: '/company-image.png',
    },
    image_url:
      '/news-main-image.jpg',
  },
  {
    id: 'news-2',
    title: 'Как подготовиться к собеседованию за неделю',
    excerpt:
      'Пошаговое руководство по эффективной подготовке к техническому интервью с примерами задач и ответов.',
    tags: ['Советы', 'Интервью'],
    author: {
      name: 'Мария Сидорова',
      image_url: '/company-image.png',
    },
    image_url:
      '/news-main-image.jpg',
  },
  {
    id: 'news-3',
    title: 'Удалённая работа: новые правила трудоустройства',
    excerpt:
      'Изменения в трудовом законодательстве, которые нужно знать при работе с зарубежными компаниями.',
    tags: ['Удалёнка', 'Законодательство'],
    author: {
      name: 'Алексей Смирнов',
      image_url: '/company-image.png',
    },
    image_url:
      '/news-main-image.jpg',
  },
  {
    id: 'news-4',
    title: '10 ошибок в резюме, которые всех раздражают',
    excerpt:
      'Составили список самых распространённых ошибок, которые мешают найти работу даже опытным специалистам.',
    tags: ['Советы', 'Резюме'],
    author: {
      name: 'Екатерина Волкова',
      image_url: '/company-image.png',
    },
    image_url:
      '/news-main-image.jpg',
  },
  {
    id: 'news-5',
    title: 'Рынок труда: рост спроса на AI-специалистов',
    excerpt:
      'Аналитический обзор изменений на рынке труда в сфере искусственного интеллекта и машинного обучения.',
    tags: ['Аналитика', 'AI'],
    author: {
      name: 'Павел Новиков',
      image_url: '/company-image.png',
    },
    image_url:
      '/news-main-image.jpg',
  },
];
