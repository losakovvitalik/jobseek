import { mockPosts } from '@/entities/post/mock/posts.mock';
import PostsCard from '@/entities/post/ui/posts-card';
import PostsSearch from '@/entities/post/ui/posts-search';

const PostsPage = () => {
  return (
    <div className="grid grid-rows-[auto,1fr] gap-2 h-full">
      <PostsSearch />
      <div className="flex h-full flex-col gap-4 overflow-auto">
        {mockPosts.map((post) => (
          <PostsCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
