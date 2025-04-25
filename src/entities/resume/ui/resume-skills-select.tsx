import MultiSelect, { MultiSelectOption, MultiSelectProps } from '@/shared/ui/multi-select';

const SKILL_OPTIONS: MultiSelectOption[] = [
  {
    label: 'React',
    value: 2,
  },
  {
    label: 'Vue',
    value: 3,
  },
  {
    label: 'Angular',
    value: 4,
  },
];

const ResumeSkillsSelect = (props: Omit<MultiSelectProps, 'options'>) => {
  return <MultiSelect options={SKILL_OPTIONS} placeholder="Ваши основные навыки" {...props} />;
};

export default ResumeSkillsSelect;
