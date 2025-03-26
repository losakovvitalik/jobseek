import { mockPosts } from '@/entities/post/__test__/mock/posts.mock';
import PostCard from '@/entities/post/ui/post-card';
import PostsSearch from '@/entities/post/ui/posts-search';

const PostsPage = () => {
  return (
    <div className="grid grid-rows-[auto,1fr] gap-2 h-full">
      <PostsSearch />
      <div className="flex h-full flex-col gap-4 overflow-auto">
        {mockPosts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
