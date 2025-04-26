'use client';
import VacancySwipeableCard from '@/entities/vacancy/ui/vacancy-swipeable-card';

import { useState } from 'react';

const jobs = ['Тест 1', 'Тест 2', 'Тест 3', 'Тест 4'];

export default function Home() {
  const [cards, setCards] = useState(jobs);

  return (
    <div className="grid h-full place-items-center overflow-hidden p-4 hover:cursor-grab active:cursor-grabbing">
      {cards.map((job) => (
        <VacancySwipeableCard job={job} key={job} cards={cards} setCards={setCards} />
      ))}
    </div>
  );
}
