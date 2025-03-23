import Typography from '@/shared/ui/typography';
import Image from 'next/image';

const Comment = () => {
  return (
    <div className='flex gap-2'>
      <Image className='w-6 h-6' src={'/avatar-placeholder.png'} alt="" width={24} height={24} />
      <div>
        <Typography size={'xs'}>User1234</Typography>
        <Typography size={'sm'}>
          Очень интересный пост. Давно ничего полезного не находил.
        </Typography>
      </div>
    </div>
  );
};

export default Comment;
