import Select, { SelectOption, SelectProps } from '@/shared/ui/select';

export const CITY_OPTIONS: SelectOption[] = [
  {
    label: 'Москва',
    value: 1,
  },
  {
    label: 'Санкт-Петербург',
    value: 2,
  },
  {
    label: 'Новосибирск',
    value: 3,
  },
  {
    label: 'Екатеринбург',
    value: 4,
  },
  {
    label: 'Казань',
    value: 5,
  },
  {
    label: 'Нижний Новгород',
    value: 6,
  },
  {
    label: 'Челябинск',
    value: 7,
  },
  {
    label: 'Красноярск',
    value: 8,
  },
  {
    label: 'Самара',
    value: 9,
  },
  {
    label: 'Уфа',
    value: 10,
  },
];

const CitySelect = (props: Omit<SelectProps, 'options'>) => {
  return <Select {...props} options={CITY_OPTIONS} searchable />;
};

export default CitySelect;
