import { mockPosts } from '@/entities/post/__tests__/mock/posts.mock';
import PostCard from '@/entities/post/ui/post-card';

const CompanyPostsTabsContent = () => {
  return (
    <div className='flex flex-col gap-4'>
      {mockPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CompanyPostsTabsContent;
