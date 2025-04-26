import useLayoutStore from '@/shared/stores/use-layout-store';
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import PageTitle from '../page-title';

describe('PageTitle', () => {
  afterEach(() => {
    useLayoutStore.setState(useLayoutStore.getInitialState());
  });

  describe('PageTitle', () => {
    afterEach(() => {
      useLayoutStore.setState(useLayoutStore.getInitialState());
    });

    it('should set page title in store on mount and reset on unmount', () => {
      const title = 'Test Title';

      const { unmount } = render(<PageTitle>{title}</PageTitle>);

      expect(useLayoutStore.getState().page).toBe(title);

      unmount();
      expect(useLayoutStore.getState().page).toBe(null);
    });

    it('should update page title when children prop changes', () => {
      const { rerender } = render(<PageTitle>First</PageTitle>);

      expect(useLayoutStore.getState().page).toBe('First');

      rerender(<PageTitle>Second</PageTitle>);
      expect(useLayoutStore.getState().page).toBe('Second');
    });

    it('should handle null or empty children gracefully', () => {
      render(<PageTitle>{null}</PageTitle>);
      expect(useLayoutStore.getState().page).toBe(null);
    });
  });
});
