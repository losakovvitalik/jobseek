import { render, screen } from '@testing-library/react';
import { describe, expect, it, vitest } from 'vitest';
import ProfileCard from '../ui/profile-card';

const defaultProps = {
  name: 'Иван Иванов',
  imageUrl: '/test-image.jpg',
  description: 'test',
};

vitest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} src={props.src} alt={props.alt} loading="eager" />,
}));

describe('ProfileCard', () => {
  // afterEach(() => cleanup());

  it('renders only with name', () => {
    render(<ProfileCard name={defaultProps.name} />);
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
  });

  it('displays image when imageUrl is provided', () => {
    render(<ProfileCard name={defaultProps.name} imageUrl={defaultProps.imageUrl} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining(defaultProps.imageUrl));
  });

  it('displays description when description is provided', () => {
    render(<ProfileCard name={defaultProps.name} description={defaultProps.description} />);
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it('does not displays description when not provided', () => {
    render(<ProfileCard name={defaultProps.name} />);
    expect(screen.queryByText(defaultProps.description)).not.toBeInTheDocument();
  });

  it('applies classes when provided', () => {
    const className = 'm-4';
    const { container } = render(<ProfileCard name={defaultProps.name} className={className} />);
    expect(container.firstChild).toHaveClass(className);
  });
});
