import { render } from '@testing-library/react';
import { describe, expect, it, vitest } from 'vitest';
import MePage from '../page';

vitest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ComponentProps<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} src={props.src} alt={props.alt} loading="eager" />
  ),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vitest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vitest.fn(),
    removeEventListener: vitest.fn(),
    dispatchEvent: vitest.fn(),
  })),
});

vitest.mock('embla-carousel-react', () => ({
  default: vitest.fn().mockReturnValue([
    { current: document.createElement('div') },
    {
      on: vitest.fn(),
      off: vitest.fn(),
      scrollPrev: vitest.fn(),
      scrollNext: vitest.fn(),
      canScrollPrev: vitest.fn().mockReturnValue(false),
      canScrollNext: vitest.fn().mockReturnValue(false),
    },
  ]),
}));

describe('MePage', () => {
  it('should match snapshot', () => {
    const { container } = render(<MePage />);
    expect(container).toMatchSnapshot();
  });
});
