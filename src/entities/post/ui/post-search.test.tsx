import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import PostsSearch from './posts-search';

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

  it('updates value in input on change', () => {
    render(<PostsSearch />);
    const input = screen.getByPlaceholderText('Поиск');
    fireEvent.change(input,  { target: { value: 'test1234' } });
    expect(input).toHaveValue("test1234")
  });
});
