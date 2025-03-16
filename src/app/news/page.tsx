import { mockNews } from '@/entities/news/mock/news.mock';
import NewsCard from '@/entities/news/ui/news-card';
import NewsSearch from '@/entities/news/ui/news-search';

const NewsPage = () => {
  return (
    <div className="grid grid-rows-[auto,1fr] gap-2">
      <NewsSearch />
      <div className='flex flex-col gap-4 overflow-auto h-full'>
      {mockNews.map((news) => (
        <NewsCard news={news} key={news.id} />
      ))}
      </div>
    </div>
  );
};

export default NewsPage;
