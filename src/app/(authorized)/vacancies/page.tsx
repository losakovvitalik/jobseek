'use client';
import { vacanciesMock } from '@/entities/vacancy/model/vacancies.mock';
import VacanciesListEnd from '@/entities/vacancy/ui/vacancies-list-end';
import VacancySwipeableCard from '@/entities/vacancy/ui/vacancy-swipeable-card';

import { useState } from 'react';

export default function Home() {
  const [cards, setCards] = useState(vacanciesMock);

  return (
    <div className="grid h-full place-items-center overflow-hidden p-4">
      {cards.map((vacancy, index) => {
        return (
          <VacancySwipeableCard
            vacancy={vacancy}
            key={vacancy.id}
            setCards={setCards}
            isFront={index === cards.length - 1}
          />
        );
      })}
      {cards.length === 0 && <VacanciesListEnd />}
    </div>
  );
}
