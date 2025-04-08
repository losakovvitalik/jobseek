import { mockPosts } from '@/entities/post/__tests__/mock/posts.mock';
import PostWithTopComment from '@/features/post-feed/ui/post-with-top-comment';

const CompanyPostsTabsContent = () => {
  return (
    <div className="flex flex-col gap-4">
      {mockPosts.map((post) => (
        <PostWithTopComment key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CompanyPostsTabsContent;
