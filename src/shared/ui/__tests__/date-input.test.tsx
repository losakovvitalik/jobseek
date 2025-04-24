import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { addDays, format, subYears } from 'date-fns';
import { ru } from 'date-fns/locale';
import { afterEach, beforeEach, describe, expect, it, vitest } from 'vitest';
import DateInput from '../date-input';

const mockToday = new Date(2025, 3, 23); // 23 апреля 2025

beforeEach(() => {
  vitest.setSystemTime(mockToday);
});

afterEach(() => {
  vitest.useRealTimers();
});

const renderDateInput = (props?: Parameters<typeof DateInput>[0]) => {
  render(<DateInput {...props} />);
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

  describe('validation', () => {
    it('should fallback to placeholder and warn on non-ISO date string', () => {
      const consoleWarnSpy = vitest.spyOn(console, 'warn').mockImplementation(() => {});

      const invalidValue = '20-08-2023'; // не в формате ISO
      const placeholder = 'Выберите дату';

      renderDateInput({
        value: invalidValue,
        placeholder,
      });

      // Ожидаем, что рендерится placeholder
      expect(screen.getByRole('button', { name: placeholder })).toBeInTheDocument();

      // И что в консоль был выведен ворнинг о некорректном формате
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        `[DateInput] Некорректный ISO-формат: "${invalidValue}"`,
      );

      consoleWarnSpy.mockRestore();
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
