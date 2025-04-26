import { motion, useMotionValue, useTransform } from 'motion/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import VacancySwipeableCardContent from './vacancy-swipeable-card-content';

export interface VacancySwipeableCardProps {
  job: string;
  cards: string[];
  setCards: Dispatch<SetStateAction<string[]>>;
}

const VacancySwipeableCard = ({ job, cards, setCards }: VacancySwipeableCardProps) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-15, 15]);
  const [secondaryColor, setSecondaryColor] = useState('#00000000'); // Default fallback

  useEffect(() => {
    // Get the CSS variable value after component mounts
    const root = document.documentElement;
    const color = getComputedStyle(root).getPropertyValue('--secondary').trim();
    setSecondaryColor(color);
  }, []);

  const background = useTransform(x, [-100, 0, 100], ['#6EC175', secondaryColor, '#F47174']);

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
      <VacancySwipeableCardContent className="bg-transparent" job={{ title: job }} />
    </motion.div>
  );
};

export default VacancySwipeableCard;
