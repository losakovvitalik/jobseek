import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { addDays, format, subYears } from 'date-fns';
import { ru } from 'date-fns/locale';
import { describe, expect, it, vitest } from 'vitest';
import DateInput, { DateInputProps } from '../date-input';

const mockToday = new Date(2025, 3, 23);

const renderDateInput = (props?: DateInputProps) => {
  vitest.useFakeTimers().setSystemTime(mockToday);
  render(<DateInput {...props} />);
  vitest.useRealTimers();
};

describe('DateInput', () => {
  describe('render', () => {
    it('should render with provided date value', () => {
      const value = '2023-08-20 00:00:00';
      const expectedDate = format(new Date(value), 'PPP', { locale: ru });

      renderDateInput({
        value,
      });

      expect(screen.getByRole('button', { name: expectedDate })).toBeInTheDocument();
    });

    it('should render placeholder when value is undefined', () => {
      const placeholder = 'выберите дату';

      renderDateInput({
        placeholder,
        value: undefined,
      });

      expect(screen.getByRole('button', { name: placeholder })).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('should open calendar popover on button click', async () => {
      renderDateInput();

      const btn = screen.getByRole('button', { name: /выберите дату/i });
      await userEvent.click(btn);

      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });

    it('should update date and call onChange when a date is selected', async () => {
      const handleChange = vitest.fn();

      renderDateInput({
        onChange: handleChange,
      });

      const btn = screen.getByRole('button', { name: /выберите дату/i });
      await userEvent.click(btn);

      const newDate = addDays(mockToday, 1);
      const newDateDay = newDate.getDate().toString();

      await userEvent.click(screen.getByText(newDateDay));

      const expectedFormattedDate = format(newDate, 'PPP', { locale: ru });
      expect(btn).toHaveTextContent(expectedFormattedDate);

      expect(handleChange).toHaveBeenCalledWith(newDate.toISOString());
    });

    it('should update year and call onChange when a year is selected', async () => {
      const handleChange = vitest.fn();

      renderDateInput({
        onChange: handleChange,
      });

      const btn = screen.getByRole('button', { name: /выберите дату/i });
      await userEvent.click(btn);

      const combobox = screen.getByRole('combobox');
      await userEvent.click(combobox);

      const newDate = subYears(mockToday, 1);
      const newDateYear = newDate.getFullYear().toString();

      await userEvent.click(screen.getByText(newDateYear));

      const expectedFormattedDate = format(newDate, 'PPP', { locale: ru });
      expect(btn).toHaveTextContent(expectedFormattedDate);

      expect(handleChange).toHaveBeenCalledWith(newDate.toISOString());
    });
  });
});
