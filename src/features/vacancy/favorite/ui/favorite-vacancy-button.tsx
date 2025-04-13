import { Button, ButtonProps } from '@/shared/ui/button';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const MotionButton = motion.create(Button);

const FavoriteVacancyButton = (props: Pick<ButtonProps, 'size'>) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <MotionButton {...props} onClick={toggleFavorite} whileTap={{ scale: 0.9 }}>
      {isFavorite ? (
        <>
          <Heart className={'stroke-primary-foreground fill-primary-foreground'} />
        </>
      ) : (
        <>
          <Heart />
        </>
      )}
    </MotionButton>
  );
};

export default FavoriteVacancyButton;
