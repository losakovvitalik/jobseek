import { mockNews } from '@/entities/news/mock/news.mock';
import NewsCard from '@/entities/news/ui/news-card';
import NewsSearch from '@/entities/news/ui/news-search';

const NewsPage = () => {
  return (
    <div className="grid grid-rows-[auto,1fr] gap-2 h-full">
      <NewsSearch />
      <div className="flex h-full flex-col gap-4 overflow-auto">
        {mockNews.map((news) => (
          <NewsCard news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
