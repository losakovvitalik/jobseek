import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import PostsSearch from '../ui/posts-search';

describe('PostsSearch', () => {
  afterEach(() => {
    cleanup();
  });

  it('has a search role', () => {
    render(<PostsSearch />);
    // screen.debug()/
    expect(screen.getByRole('search')).toBeInTheDocument();
  });

  it('has a placeholder', () => {
    render(<PostsSearch />);
    expect(screen.getByPlaceholderText('Поиск')).toBeDefined();
  });

  it('updates value in input on change', async () => {
    render(<PostsSearch />);
    const input = screen.getByPlaceholderText('Поиск');
    await userEvent.type(input, 'test1234');
    expect(input).toHaveValue('test1234');
  });
});
