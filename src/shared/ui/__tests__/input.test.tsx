import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vitest } from 'vitest';
import { Input, InputProps } from '../input';

const renderInput = (props?: InputProps) => {
  render(<Input {...props} />);
};
const getInput = () => screen.getByRole('textbox');

describe('Input', () => {
  describe('render', () => {
    it('should render input element with default props', () => {
      renderInput();

      const textbox = screen.getByRole('textbox');

      expect(textbox).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      const customClass = 'custom-class';
      renderInput({
        className: customClass,
      });

      const textbox = screen.getByRole('textbox');
      expect(textbox).toHaveClass(customClass);
    });

    it('should render with provided type', () => {
      const type = 'email';

      renderInput({
        type: type,
      });

      const textbox = screen.getByRole('textbox');
      expect(textbox).toHaveAttribute('type', type);
    });

    it('should render with provided value', () => {
      const value = 'test1234';

      renderInput({
        value,
      });

      const textbox = screen.getByRole('textbox');
      expect(textbox).toHaveValue(value);
    });

    it('should default to empty string if no value is provided', () => {
      renderInput();

      const textbox = screen.getByRole('textbox');
      expect(textbox).toHaveValue('');
    });

    it('should spread additional props to the input', () => {
      const placeholder = 'test1234';
      const disabled = true;

      renderInput({
        placeholder,
        disabled,
      });

      const textbox = screen.getByRole('textbox');
      expect(textbox).toHaveAttribute('placeholder', placeholder);
      expect(textbox).toBeDisabled();
    });

    it('should apply aria-invalid styles', () => {
      renderInput({ 'aria-invalid': 'true' });
      const input = getInput();
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(input).toHaveClass('aria-invalid:ring-destructive/20');
    });
  });

  describe('interactions', () => {
    it('should call onChange when input value changes', async () => {
      const onChange = vitest.fn();
      renderInput({ value: '', onChange });
      await userEvent.type(screen.getByRole('textbox'), 'abc');
      expect(onChange).toHaveBeenCalledTimes(3);
    });
  });
});
