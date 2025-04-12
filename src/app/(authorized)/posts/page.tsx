import { mockPosts } from '@/entities/post/__tests__/mock/posts.mock';
import PostsSearch from '@/entities/post/ui/posts-search';
import PostWithTopComment from '@/features/post-feed/ui/post-with-top-comment';

const PostsPage = () => {
  return (
    <div className="grid h-full grid-rows-[auto,1fr] gap-2">
      <PostsSearch />
      <div className="flex overflow-auto h-full flex-col gap-4">
        {mockPosts.map((post) => (
          <PostWithTopComment post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
