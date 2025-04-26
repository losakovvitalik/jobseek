import { motion, useMotionValue, useTransform } from 'motion/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Vacancy } from '../model/types';
import VacancySwipeableCardContent from './vacancy-swipeable-card-content';

export interface VacancySwipeableCardProps {
  vacancy: Vacancy;
  setCards: Dispatch<SetStateAction<Vacancy[]>>;
  isFront?: boolean;
}

const VacancySwipeableCard = ({ vacancy, isFront, setCards }: VacancySwipeableCardProps) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-15, 15]);
  const [secondaryColor, setSecondaryColor] = useState('#00000000');

  useEffect(() => {
    const root = document.documentElement;
    const color = getComputedStyle(root).getPropertyValue('--secondary').trim();
    setSecondaryColor(color);
  }, []);

  const background = useTransform(x, [-100, 0, 100], ['#6EC175', secondaryColor, '#F47174']);

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((pv) => pv.filter((v) => v.id !== vacancy.id));
    }
  };

  return (
    <motion.div
      className="origin-bottom rounded-xl hover:cursor-grab active:cursor-grabbing"
      drag="x"
      key={vacancy.id}
      onDragEnd={handleDragEnd}
      style={{
        z: isFront ? 1 : 0,
        y: isFront ? '5%' : 0,
        gridColumn: 1,
        gridRow: 1,
        background,
        rotate,
        x,
      }}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      animate={{ scale: isFront ? 1 : 0.9 }}
    >
      <VacancySwipeableCardContent className="bg-transparent" vacancy={vacancy} />
    </motion.div>
  );
};

export default VacancySwipeableCard;
