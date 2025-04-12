import { Button } from '@/shared/ui/button';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const MotionButton = motion.create(Button);

const FavoriteVacancyButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <MotionButton onClick={toggleFavorite} whileTap={{ scale: 0.95 }} variant={'secondary'}>
      {isFavorite ? (
        <>
          Убрать из избранного <Heart className={'stroke-white fill-white'} />
        </>
      ) : (
        <>
          В избранное <Heart />
        </>
      )}
    </MotionButton>
  );
};

export default FavoriteVacancyButton;
