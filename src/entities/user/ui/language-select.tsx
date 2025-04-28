import Select, { SelectOption, SelectProps } from '@/shared/ui/select';

export const LANGUAGE_OPTIONS: SelectOption[] = [
  {
    label: 'Русский',
    value: 1,
  },
  {
    label: 'Китайский',
    value: 2,
  },
  {
    label: 'Английский',
    value: 3,
  },
  {
    label: 'Хинди',
    value: 4,
  },
  {
    label: 'Арабский',
    value: 5,
  },
  {
    label: 'Бенгальский',
    value: 6,
  },
  {
    label: 'Португальский',
    value: 7,
  },
  {
    label: 'Японский',
    value: 8,
  },
];

const LanguageFormSelect = (props: Omit<SelectProps, 'options'>) => {
  return <Select {...props} options={LANGUAGE_OPTIONS} placeholder="" searchable />;
};

export default LanguageFormSelect;
