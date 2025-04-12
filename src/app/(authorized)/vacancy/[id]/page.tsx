'use client';
import CompanyLink from '@/entities/company/ui/company-link';
import FavoriteVacancyButton from '@/features/vacancy/favorite/ui/favorite-vacancy-button';
import ReportVacancyButton from '@/features/vacancy/report/ui/report-vacancy-button';
import usePageTitle from '@/shared/hooks/use-page-title';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import Typography from '@/shared/ui/typography';
import VacancyCarousel from '@/widgets/vacancy-carousel/ui/vacancy-carousel';
import { Eye, Share } from 'lucide-react';

const VacancyPage = () => {
  usePageTitle('Вакансия');

  return (
    <div>
      <Card>
        <CardContent>
          <div className="flex justify-between">
            <Typography size={'2xl'}>Front-end разработчик</Typography>
            <ReportVacancyButton />
          </div>
          <CompanyLink className="mt-2" />
          <Typography className="mt-2 font-semibold" size={'xl'}>
            от 150 000 до 200 000 руб.
          </Typography>
        </CardContent>
      </Card>
      <div className="my-4 grid grid-cols-[1fr_1fr_auto] gap-2">
        <FavoriteVacancyButton />
        <Button variant={'secondary'}>Откликнуться</Button>
        <Button size={'icon'} variant={'secondary'}>
          <Share />
        </Button>
      </div>

      <Card>
        <CardContent>
          <Typography variant={'subtitle'}>Информация</Typography>
          <div className="mt-2 flex gap-1">
            <Typography>Тип занятости:</Typography>
            <Typography className="font-bold">Полный день</Typography>
          </div>
          <div className="mt-2 flex gap-1">
            <Typography>Формат работы:</Typography>
            <Typography className="font-bold">офис</Typography>
          </div>
          <div className="mt-2 flex gap-1">
            <Typography>Город:</Typography>
            <Typography className="font-bold">Москва</Typography>
          </div>
          <div className="mt-2 flex gap-1">
            <Typography>Опыт работы:</Typography>
            <Typography className="font-bold">Любой</Typography>
          </div>
          <div className="mt-2 flex gap-1">
            <Typography>График:</Typography>
            <Typography className="font-bold">Полный день</Typography>
          </div>
          <Typography className="mt-4" variant={'subtitle'}>
            О вакансии
          </Typography>
          <Typography>
            Сбербанк развивает цифровые продукты для миллионов пользователей. Мы ищем
            Frontend-разработчика для участия в создании платформы СберСервис (онлайн-экосистема
            услуг). Проект: разработка интерфейсов для внутренних аналитических систем и клиентских
            приложений.
          </Typography>

          <Typography className="mt-4" variant={'subtitle'}>
            Обязанности
          </Typography>
          <Typography>
            <ul className="list-disc pl-4">
              <li>Разработка SPA на React/TypeScript.</li>
              <li>Интеграция с REST API и WebSocket.</li>
              <li>Участие в проектировании архитектуры приложений.</li>
              <li>Оптимизация производительности и доступности (a11y).</li>
              <li>Работа в кросс-функциональной команде (QA, UX/UI, бэкенд).</li>
              <li>Написание unit- и e2e-тестов (Jest, Cypress).</li>
            </ul>
          </Typography>

          <Typography className="mt-4" variant={'subtitle'}>
            Требования
          </Typography>
          <ul className="list-disc pl-4">
            <li>3+ года коммерческого опыта во Frontend-разработке.</li>
            <li>Глубокое знание React, TypeScript, Redux Toolkit/Zustand.</li>
            <li>Опыт работы с Next.js или аналогичными фреймворками.</li>
            <li>Понимание принципов CI/CD, GitFlow.</li>
            <li>Умение работать в Agile (Scrum/Kanban).</li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-4 flex gap-1 px-4">
        <Typography size={'sm'}>Опубликовано: 23 марат 2025</Typography>
        <Typography size={'sm'}>•</Typography>
        <Typography className="flex items-center gap-1" size={'sm'}>
          <Eye className="size-3" /> 1.2K
        </Typography>
      </div>

      <div className="mt-4 px-4">
        <Typography variant={'subtitle'}>Похожие вакансии</Typography>
        <VacancyCarousel className="mt-2" />
      </div>
    </div>
  );
};

export default VacancyPage;
