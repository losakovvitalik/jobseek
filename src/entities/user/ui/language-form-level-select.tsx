import Select, { SelectOption, SelectProps } from '@/shared/ui/select';

export const LANGUAGE_LEVEL_OPTIONS: SelectOption[] = [
  {
    label: 'A1',
    value: 1,
  },
  {
    label: 'A2',
    value: 2,
  },
  {
    label: 'B1',
    value: 3,
  },
  {
    label: 'B2',
    value: 4,
  },
  {
    label: 'C1',
    value: 5,
  },
  {
    label: 'C2',
    value: 6,
  },
];

const LanguageFormLevelSelect = (props: Omit<SelectProps, 'options'>) => {
  return <Select {...props} options={LANGUAGE_LEVEL_OPTIONS} placeholder="" />;
};

export default LanguageFormLevelSelect;
