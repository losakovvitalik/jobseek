import Select, { SelectProps } from '@/shared/ui/select';

export const EDUCATION_TYPE_OPTIONS = [
  {
    label: 'Университет',
    value: 'university',
  },
  {
    value: 'course',
    label: 'Онлайн курс',
  },
];

const EducationTypeSelect = (props: Omit<SelectProps, 'options'>) => {
  return <Select {...props} options={EDUCATION_TYPE_OPTIONS} />;
};

export default EducationTypeSelect;
