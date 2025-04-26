import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import PhoneInput, { PhoneInputProps } from '../phone-input';

const renderPhoneInput = (props?: PhoneInputProps) => {
  render(<PhoneInput {...props} />);
};

const getInput = (): HTMLInputElement => screen.getByRole('textbox');

describe('PhoneInput', () => {
  describe('render', () => {
    it('should render without crashing and apply the given placeholder', () => {
      const placeholder = 'Введите номер телефона';

      renderPhoneInput({
        placeholder,
      });

      expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });

    it('should set input type to tel', () => {
      renderPhoneInput();

      const input = getInput();
      expect(input).toHaveAttribute('type', 'tel');
    });

    it('should merge custom className with default classes', () => {
      const className = 'bg-white';

      renderPhoneInput({
        className,
      });

      const input = getInput();
      expect(input).toHaveClass(className);
    });
  });

  describe('interactions', () => {
    it('should call onChange with unmasked value when input changes', async () => {
      const value = '7777';
      const onChange = vi.fn();

      renderPhoneInput({
        onChange,
      });

      const input = getInput();

      await userEvent.type(input, value);

      expect(onChange).toBeCalledTimes(value.length);
      expect(onChange).toHaveBeenCalledWith(value);
    });

    it('should call onBlur when input loses focus', () => {
      const handleBlur = vi.fn(); // мок функции

      const { getByPlaceholderText } = render(
        <PhoneInput placeholder="Phone" onBlur={handleBlur} />,
      );

      const input = getByPlaceholderText('Phone');
      fireEvent.blur(input);

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('should use the correct input mask "+7 (000) 000-00-00"', async () => {
      renderPhoneInput();

      const input = getInput();

      await userEvent.type(input, '9123456789');

      expect(input.value).toBe('+7 (912) 345-67-89');
    });

    it('should disable interaction styles when input is disabled', () => {
      renderPhoneInput({
        disabled: true,
      });

      const input = getInput();

      expect(input).toBeDisabled();
      expect(input).toHaveClass('disabled:pointer-events-none');
      expect(input).toHaveClass('disabled:cursor-not-allowed');
    });
  });
});
