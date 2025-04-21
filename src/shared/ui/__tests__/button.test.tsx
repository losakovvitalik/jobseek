import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, test, vitest } from 'vitest';
import { Button } from '../button';

describe('Button', () => {
  describe('rendering', () => {
    it('renders children and has role button with accessible name', () => {
      render(<Button>click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('applies default classes', () => {
      render(<Button />);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('h-9');
      expect(btn).toHaveClass('bg-primary');
      expect(btn).toHaveClass('inline-flex');
    });

    it('merges custom class names', () => {
      render(<Button className="custom-class" />);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('custom-class');
    });

    it('passes through props to underlying element', () => {
      render(<Button aria-invalid={true} title="click me" />);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('aria-invalid', 'true');
      expect(btn).toHaveAttribute('title', 'click me');
    });

    it('renders as a child element when asChild is true', () => {
      render(
        <Button asChild>
          <a href="#">Link</a>
        </Button>,
      );
      const link = screen.getByRole('link', { name: /link/i });
      expect(link).toHaveAttribute('data-slot', 'button');
      expect(link).toHaveClass('bg-primary');
    });

    it('renders an svg child and applies svg-specific class', () => {
      render(
        <Button>
          <svg data-testid="icon" />
        </Button>,
      );
      const btn = screen.getByRole('button');
      expect(btn).toContainElement(screen.getByTestId('icon'));
      expect(btn).toHaveClass('[&_svg]:pointer-events-none');
    });
  });

  describe('sizes', () => {
    const cases = [
      ['sm', ['h-8', 'px-3']],
      ['lg', ['h-10', 'px-6']],
      ['icon', ['size-9']],
    ] as const;

    test.each(cases)('size=%s has to have classes %j', (size, classes) => {
      render(<Button size={size} />);
      const btn = screen.getByRole('button');

      classes.forEach((className) => {
        expect(btn).toHaveClass(className);
      });
    });
  });

  describe('variants', () => {
    const cases = [
      ['destructive', ['bg-destructive', 'text-white']],
      ['outline', ['border', 'border-input', 'bg-background']],
      ['secondary', ['bg-secondary', 'text-secondary-foreground']],
      ['ghost', ['hover:bg-accent']],
      ['link', ['underline-offset-4']],
    ] as const;

    test.each(cases)('variant=%s has to have classes %j', (variant, classes) => {
      render(<Button variant={variant} />);
      const btn = screen.getByRole('button');

      classes.forEach((className) => {
        expect(btn).toHaveClass(className);
      });
    });

    it('ghost variant should not have default background class', () => {
      render(<Button variant="ghost">Ghost</Button>);
      const btn = screen.getByRole('button', { name: /ghost/i });
      expect(btn).not.toHaveClass('bg-primary');
    });
  });

  describe('interactions', () => {
    it('calls onClick when clicked', async () => {
      const onClick = vitest.fn();
      render(<Button onClick={onClick}>Click</Button>);
      const btn = screen.getByRole('button', { name: /click/i });
      await userEvent.click(btn);
      expect(onClick).toHaveBeenCalledOnce();
    });

    it('is disabled and does not call onClick when disabled prop is true', async () => {
      const onClick = vitest.fn();
      render(
        <Button onClick={onClick} disabled>
          Disabled
        </Button>,
      );
      const btn = screen.getByRole('button', { name: /disabled/i });
      expect(btn).toBeDisabled();
      await userEvent.click(btn);
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('accessibility', () => {
    it('receives focus via keyboard navigation', async () => {
      render(<Button>FocusMe</Button>);
      await userEvent.tab();
      expect(screen.getByRole('button', { name: /focusme/i })).toHaveFocus();
    });
  });
});
