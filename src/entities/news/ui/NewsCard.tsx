import { Badge } from '@/components/ui/badge';
import Typography from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';
import { News } from '../types/news';

export interface NewsCardProps {
  news: News;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Link href={'#'} className="bg-secondary rounded-lg">
      <Image className="w-full rounded-t-lg" src={news.image_url} alt="" width={400} height={200} />

      <div className="py-4 px-2">
        <div className="my-1 flex items-center gap-1">
          <Image
            className="h-6 w-6 rounded-full object-cover"
            src={news.author.image_url}
            alt=""
            width={48}
            height={48}
          />
          <Typography className="font-medium">{news.author.name}</Typography>
        </div>
        <Typography size={'xl'}>{news.title}</Typography>
        <Typography size={'sm'}>{news.excerpt}</Typography>

        <div className="mt-2 flex gap-2">
          {news.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
