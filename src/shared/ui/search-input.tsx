import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';

export interface SearchInputProps extends React.ComponentProps<'input'> {}

function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <div className={cn('relative flex', className)}>
      <Input
        className={cn('h-9 rounded-r-none border-r-0')}
        placeholder="Введите название вакансии, компании или поста"
        {...props}
      />
      <Button className="rounded-l-none" variant={'outline'} size={'icon'}>
        <Search className="" />
      </Button>
    </div>
  );
}

export default SearchInput;
