import { mockPosts } from '@/entities/post/__test__/mock/posts.mock';
import PostWithTopComment from '@/features/post-feed/ui/post-with-top-comment';
import { TabsContent } from '@/shared/ui/tabs';

const UserPostsTabsContent = () => {
  return (
    <TabsContent value="post">
      <div className="flex h-full flex-col gap-4 overflow-auto">
        {mockPosts.map((post) => (
          <PostWithTopComment post={post} key={post.id} />
        ))}
      </div>
    </TabsContent>
  );
};

export default UserPostsTabsContent;
