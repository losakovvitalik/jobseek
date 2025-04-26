'use client';
import SearchInput from '@/shared/ui/search-input';
import { useState } from 'react';

const PostsSearch = () => {
  const [value, setValue] = useState('');

  return (
    <div role="search">
      <SearchInput
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="Поиск"
      />
    </div>
  );
};

export default PostsSearch;
