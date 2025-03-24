'use client';
import VacancyCard from '@/entities/vacancy/ui/vacancy-card';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { Dispatch, SetStateAction, useState } from 'react';

const jobs = ['Тест 1', 'Тест 2', 'Тест 3', 'Тест 4'];

export default function Home() {
  const [cards, setCards] = useState(jobs);

  return (
    <div className="grid h-full place-items-center p-4 hover:cursor-grab active:cursor-grabbing overflow-hidden">
      {cards.map((job) => (
        <Card job={job} key={job} cards={cards} setCards={setCards} />
      ))}
    </div>
  );
}

const Card = ({
  job,
  cards,
  setCards,
}: {
  job: string;
  cards: string[];
  setCards: Dispatch<SetStateAction<string[]>>;
}) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-15, 15]);
  const background = useTransform(x, [-100, 0, 100], ['#6EC175', '#262626', '#F47174']);

  const isFront = cards[cards.length - 1] === job;

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((pv) => pv.filter((v) => v !== job));
    }
  };

  return (
    <motion.div
      drag="x"
      className="origin-bottom rounded-xl"
      key={job}
      onDragEnd={handleDragEnd}
      style={{
        z: isFront ? 1 : 0,
        gridColumn: 1,
        gridRow: 1,
        background,
        // opacity,
        rotate,
        x,
      }}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      animate={{ scale: isFront ? 1 : 0.9 }}
    >
      <VacancyCard className="bg-transparent" job={{ title: job }} />
    </motion.div>
  );
};
