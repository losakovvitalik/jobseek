import { List, Newspaper, Search, User, WalletCards } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const MobileMenu = () => {
  return (
    <div className="border-border grid grid-cols-5 items-center justify-items-center border-t px-4">
      <Button asChild size={'icon'} variant={'link'} className='size-12'>
        <Link href="/search">
          <Search className='size-6' />
        </Link>
      </Button>
      <Button asChild size={'icon'} variant={'link'} className='size-12'>
        <Link href="/news">
          <Newspaper className='size-6' />
        </Link>
      </Button>
      <Button asChild size={'icon'} variant={'link'} className='size-12'>
        <Link href="/jobs">
          <WalletCards className='size-6' />
        </Link>
      </Button>
      <Button asChild size={'icon'} variant={'link'} className='size-12'>
        <Link href="/messages">
          <List className='size-6' />
        </Link>
      </Button>
      <Button asChild size={'icon'} variant={'link'} className='size-12'>
        <Link href="/me">
          <User className='size-6' />
        </Link>
      </Button>
    </div>
  );
};

export default MobileMenu;
