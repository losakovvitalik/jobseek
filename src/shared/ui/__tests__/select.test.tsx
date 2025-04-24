import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Select, { SelectOption, SelectProps } from '../select';

const renderSelect = (props?: SelectProps) => {
  const options: SelectOption[] = [
    { value: '1', label: 'Опция 1' },
    { value: '2', label: 'Опция 2' },
  ];

  render(<Select options={options} {...props} />);
};

describe('Select', () => {
  describe('render', () => {
    it('should render the placeholder when no value is selected', () => {
      renderSelect();

      const btn = screen.getByRole('combobox', { name: /выберите/i });

      expect(btn).toBeInTheDocument();
    });

    it('should render the selected option label when a value is selected', () => {
      const options: SelectOption[] = [
        { value: '1', label: 'Опция 1' },
        { value: '2', label: 'Опция 2' },
      ];

      render(<Select options={options} value="2" onChange={() => {}} />);

      expect(screen.getByText('Опция 2')).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('should open the popover when the trigger is clicked', async () => {
      renderSelect();

      const btn = screen.getByRole('combobox', { name: /выберите/i });

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

      await userEvent.click(btn);

      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
  });
});
