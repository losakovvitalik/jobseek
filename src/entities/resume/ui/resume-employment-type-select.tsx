import MultiSelect, { MultiSelectOption, MultiSelectProps } from '@/shared/ui/multi-select';

const EMPLOYMENT_TYPE_OPTIONS: MultiSelectOption[] = [
  {
    label: 'Полная занятость',
    value: 1,
  },
  {
    label: 'Частичная занятость',
    value: 2,
  },
  {
    label: 'Проектная занятость',
    value: 3,
  },
  {
    label: 'Волонтёрство',
    value: 4,
  },
  {
    label: 'Стажировка',
    value: 5,
  },
];

const ResumeEmploymentTypeSelect = (props: Omit<MultiSelectProps, 'options'>) => {
  return (
    <MultiSelect
      options={EMPLOYMENT_TYPE_OPTIONS}
      placeholder="Предпочитаемые типы занятости"
      {...props}
    />
  );
};

export default ResumeEmploymentTypeSelect;
