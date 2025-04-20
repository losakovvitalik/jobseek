import Select, { SelectProps } from '@/shared/ui/select';

export const USER_SEARCH_STATUS_OPTIONS = [
  {
    label: 'Активно ищу работу',
    value: 'active',
  },
  {
    label: 'Рассматриваю предложения',
    value: 'considering',
  },
  {
    label: 'Не ищу работу',
    value: 'inactive',
  },
];

const UserSearchStatusSelect = (props: Omit<SelectProps, 'options'>) => {
  return <Select {...props} options={USER_SEARCH_STATUS_OPTIONS} />;
};

export default UserSearchStatusSelect;
