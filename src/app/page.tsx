'use client';
import JobCard from '@/entities/job/ui/JobCard';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { Dispatch, SetStateAction, useState } from 'react';

const jobs = ['тест 1', 'тест 2', 'тест 3', 'тест 4'];

export default function Home() {
  const [cards, setCards] = useState(jobs);

  return (
    <div className="grid h-full place-items-center p-4 hover:cursor-grab active:cursor-grabbing">
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
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotate = useTransform(x, [-150, 150], [-15, 15]);

  const isFront = cards[cards.length - 1] === job;

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((pv) => pv.filter((v) => v !== job));
    }
  };

  return (
    <motion.div
      drag="x"
      className="origin-bottom"
      key={job}
      onDragEnd={handleDragEnd}
      style={{
        gridColumn: 1,
        gridRow: 1,
        opacity,
        rotate,
        x,
        z: isFront ? 1 : 0,
      }}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      animate={{ scale: isFront ? 1 : 0.9 }}
    >
      <JobCard job={{ title: job }} />
    </motion.div>
  );
};
