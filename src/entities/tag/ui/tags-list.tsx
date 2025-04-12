import { cn } from '@/lib/utils';
import { Badge } from '@/shared/ui/badge';

interface TagsListProps {
  tags: string[];
  className?: string;
}

const TagsList = ({ tags, className }: TagsListProps) => {
  return (
    <div className={cn('mt-2 flex flex-wrap gap-1', className)}>
      {tags.map((tag) => (
        <Badge key={tag}>{tag}</Badge>
      ))}
    </div>
  );
};

export default TagsList;
