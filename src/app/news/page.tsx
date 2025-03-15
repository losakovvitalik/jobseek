import { mockNews } from '@/entities/news/mock/news.mock';
import NewsCard from '@/entities/news/ui/NewsCard';

const NewsPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      {mockNews.map((news) => (
        <NewsCard news={news} key={news.id} />
      ))}
    </div>
  );
};

export default NewsPage;
