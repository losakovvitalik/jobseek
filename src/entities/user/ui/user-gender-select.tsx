import Select, { SelectProps } from '@/shared/ui/select';

export const USER_GENDER_OPTIONS = [
  {
    label: 'Мужчина',
    value: 'male',
  },
  {
    label: 'Женщина',
    value: 'female',
  },
];

const UserGenderSelect = (props: Omit<SelectProps, 'options'>) => {
  return <Select {...props} options={USER_GENDER_OPTIONS} />;
};

export default UserGenderSelect;
