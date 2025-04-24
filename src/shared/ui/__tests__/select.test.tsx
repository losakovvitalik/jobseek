import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vitest } from 'vitest';
import Select, { SelectOption, SelectProps } from '../select';

const options: SelectOption[] = [
  { value: '1', label: 'Опция 1' },
  { value: '2', label: 'Опция 2' },
] as const;

const renderSelect = (props?: SelectProps) => {
  render(<Select options={options} {...props} />);
};

const openPopup = async () => {
  const btn = screen.getByRole('combobox', { name: /выберите/i });
  await userEvent.click(btn);
};

describe('Select', () => {
  describe('render', () => {
    it('should render the placeholder when no value is selected', () => {
      renderSelect();

      const btn = screen.getByRole('combobox', { name: /выберите/i });

      expect(btn).toBeInTheDocument();
    });

    it('should render the selected option label when a value is selected', () => {
      const currentOption = options[1];

      renderSelect({
        options,
        value: currentOption.value,
      });

      expect(screen.getByText(currentOption.label)).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('should open the popover when the trigger is clicked', async () => {
      renderSelect();

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

      await openPopup();

      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should close the popover after selecting an option', async () => {
      renderSelect();
      await openPopup();

      const option = screen.getByRole('option', { name: options[0].label });
      await userEvent.click(option);

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should call onChange with the correct value when an option is selected', async () => {
      const onChange = vitest.fn();
      const currentOption = options[0];

      renderSelect({
        onChange,
      });
      await openPopup();

      const option = screen.getByRole('option', { name: currentOption.label });
      await userEvent.click(option);

      expect(onChange).toHaveBeenCalledWith(currentOption.value);
    });
  });

  describe('search', () => {
    it('should filter options based on the search input', async () => {
      renderSelect({
        searchable: true,
      });
      await openPopup();

      const searchbox = screen.getByRole('searchbox');
      await userEvent.type(searchbox, 'опция 1');

      const option1 = screen.getByRole('option', { name: options[0].label });
      expect(option1).toBeInTheDocument();

      const option2 = screen.queryByRole('option', { name: options[1].label });
      expect(option2).not.toBeInTheDocument();
    });

    it('should display empty text when no options match the search input', async () => {
      const emptyText = 'Ничего не найдено';
      renderSelect({
        searchable: true,
        emptyText,
      });
      await openPopup();

      const searchbox = screen.getByRole('searchbox');
      await userEvent.type(searchbox, 'опция 3');

      const emptyTextEl = screen.getByText(emptyText);
      expect(emptyTextEl).toBeInTheDocument();
    });
  });

  it('should render nothing when options array is empty and searchable is false', async () => {
    const emptyText = 'ничего не найдено';

    renderSelect({
      emptyText,
      options: [],
    });
    await openPopup();

    const emptyTextEl = screen.getByText(emptyText);
    expect(emptyTextEl).toBeInTheDocument();
  });

  it('should not crash when value is not found in options', () => {
    const emptyText = 'Выберите опцию';

    renderSelect({
      value: 'non-existent-value',
      placeholder: emptyText,
    });

    const emptyTextEl = screen.getByText(emptyText);
    expect(emptyTextEl).toBeInTheDocument();
  });
});
