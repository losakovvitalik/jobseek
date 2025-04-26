import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import MultiSelect, { MultiSelectProps, MultiSelectValueType } from '../multi-select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const renderMultiSelect = (props?: Partial<Omit<MultiSelectProps, 'onChange'>>) => {
  const onChange = vi.fn();

  const Wrapper = () => {
    const [value, setValue] = useState<MultiSelectValueType[]>([]);

    return (
      <>
        <MultiSelect
          options={options}
          value={value} // пустой массив – ничего не выбрано
          placeholder="Выберите варианты" // кастомный плейсхолдер
          {...props}
          onChange={(v) => {
            setValue(v);
            onChange(v);
          }}
        />
        <button>outside</button>
      </>
    );
  };

  render(<Wrapper />);

  return { onChange };
};

const getTrigger = () => screen.getByRole('combobox');

describe('MultiSelect', () => {
  describe('render', () => {
    it('should render placeholder when no options are selected', () => {
      renderMultiSelect();

      expect(screen.getByText('Выберите варианты')).toBeInTheDocument();
      expect(screen.queryAllByRole('listitem', { name: /Option/ })).toHaveLength(0);
    });

    it('should render selected options as badges', () => {
      renderMultiSelect({
        value: [options[0].value, options[1].value],
      });

      expect(screen.getByText(options[0].label)).toBeInTheDocument();
      expect(screen.getByText(options[1].label)).toBeInTheDocument();
      expect(screen.queryByText(options[2].label)).not.toBeInTheDocument();
    });
  });

  describe('open and close', () => {
    it('should open the dropdown when the trigger button is clicked', async () => {
      renderMultiSelect();

      const trigger = getTrigger();

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      await userEvent.click(trigger);
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should close the dropdown when the trigger button is clicked twice', async () => {
      renderMultiSelect();

      const trigger = getTrigger();

      await userEvent.click(trigger);
      await userEvent.click(trigger);
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should close the dropdown when it loses focus', async () => {
      renderMultiSelect();

      const trigger = getTrigger();
      await userEvent.click(trigger);

      expect(await screen.findByText(options[0].label)).toBeVisible();

      const outsideButton = screen.getByText(/outside/i);
      await userEvent.click(outsideButton);

      expect(screen.queryByRole('listbox')).toBeNull();
    });
  });

  describe('search', () => {
    it('should render searchbox when searchable prop passed', async () => {
      renderMultiSelect({
        searchable: true,
      });

      expect(screen.queryByRole('searchbox')).not.toBeInTheDocument();

      const trigger = getTrigger();
      await userEvent.click(trigger);

      const searchbox = screen.getByRole('searchbox');
      expect(searchbox).toBeInTheDocument();
    });

    it('should show emptyText when no options match the search', async () => {
      const emptyText = 'по вашему запросу ничего не найдено';
      renderMultiSelect({
        emptyText,
        searchable: true,
      });

      const trigger = getTrigger();
      await userEvent.click(trigger);

      const searchbox = screen.getByRole('searchbox');
      await userEvent.type(searchbox, 'test1234');

      expect(screen.getByText(emptyText)).toBeInTheDocument();
    });

    it('should filter options based on the search input', async () => {
      const emptyText = 'по вашему запросу ничего не найдено';

      renderMultiSelect({
        searchable: true,
        emptyText,
      });

      const trigger = getTrigger();
      await userEvent.click(trigger);

      const searchbox = screen.getByRole('searchbox');

      options.forEach((option) => {
        expect(screen.getByText(option.label)).toBeInTheDocument();
      });

      await userEvent.type(searchbox, options[1].label);

      expect(screen.getByText(options[1].label)).toBeInTheDocument();
      expect(screen.queryByText(options[0].label)).not.toBeInTheDocument();
      expect(screen.queryByText(options[2].label)).not.toBeInTheDocument();
      expect(screen.queryByText(emptyText)).not.toBeInTheDocument();
    });
  });

  describe('interaction', () => {
    it('should call onChange with updated value when an option is selected', async () => {
      const { onChange } = renderMultiSelect();

      const trigger = getTrigger();
      await userEvent.click(trigger);

      const option1 = screen.getByText(options[0].label);
      await userEvent.click(option1);

      const option2 = screen.getByText(options[1].label);
      await userEvent.click(option2);

      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledWith([options[0].value, options[1].value]);
    });

    it('should deselect an option when it is clicked again', async () => {
      const { onChange } = renderMultiSelect();

      const trigger = getTrigger();
      await userEvent.click(trigger);

      const option1 = screen.getByText(options[0].label);
      await userEvent.click(option1);
      await userEvent.click(option1);

      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledWith([]);
    });

    it('should remove a selected option when the close button on a badge is clicked', async () => {
      const { onChange } = renderMultiSelect();

      const trigger = getTrigger();
      await userEvent.click(trigger);

      const option1 = screen.getByText(options[0].label);
      await userEvent.click(option1);

      await userEvent.click(trigger);
      const badge1 = screen.getByText(options[0].label);
      await userEvent.click(badge1);

      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledWith([]);
    });
  });
});
