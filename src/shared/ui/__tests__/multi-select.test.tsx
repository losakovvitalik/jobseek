import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import MultiSelect, { MultiSelectOption, MultiSelectProps } from '../multi-select';

const renderMultiSelect = (props?: Partial<MultiSelectProps>) => {
  const options: MultiSelectOption[] = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
  ];
  const onChange = vi.fn();

  render(
    <MultiSelect
      options={options}
      value={[]} // пустой массив – ничего не выбрано
      onChange={onChange}
      placeholder="Выберите варианты" // кастомный плейсхолдер
      {...props}
    />,
  );
};

describe('MultiSelect', () => {
  it('should render placeholder when no values are selected', () => {
    renderMultiSelect();

    expect(screen.getByText('Выберите варианты')).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem', { name: /Option/ })).toHaveLength(0);
  });

  it('should render badges for each selected value', () => {
    renderMultiSelect({
      value: [1, 2],
    });

    screen.debug()
  });
});
