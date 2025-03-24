import Typography from '@/shared/ui/typography';
import { UserRound } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-background text-foreground border-border border-b p-4 text-sm flex justify-between items-center">
      <Typography size={'lg'}>JobSeek</Typography>
      <UserRound />
    </div>
  );
};

export default Header;
