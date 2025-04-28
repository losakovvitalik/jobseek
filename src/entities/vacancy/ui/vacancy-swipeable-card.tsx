import Typography from '@/shared/ui/typography';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { useTheme } from 'next-themes';
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
  const { theme } = useTheme();

  const cancelTextT = useTransform(x, [0, 50], [25, -25]);
  const confirmTextT = useTransform(x, [-50, 0], [-25, 25]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const root = document.documentElement;
      const color = getComputedStyle(root).getPropertyValue('--secondary').trim();
      setSecondaryColor(color);
    });
  }, [theme]);

  const background = useTransform(x, [-100, 0, 100], ['#6EC175', secondaryColor, '#F47174']);

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((pv) => pv.filter((v) => v.id !== vacancy.id));
    }
  };

  return (
    <motion.div
      className="relative origin-bottom rounded-xl hover:cursor-grab active:cursor-grabbing"
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
      <motion.div
        style={{
          y: cancelTextT,
        }}
      >
        <Typography className="absolute -top-4 left-1/2 -z-10 -translate-x-1/2">
          Пропустить
        </Typography>
      </motion.div>

      <motion.div
        style={{
          y: confirmTextT,
        }}
      >
        <Typography className="absolute -top-4 left-1/2 -z-10 -translate-x-1/2">
          Откликнуться
        </Typography>
      </motion.div>
      <VacancySwipeableCardContent className="relative bg-inherit" vacancy={vacancy} />
    </motion.div>
  );
};

export default VacancySwipeableCard;
