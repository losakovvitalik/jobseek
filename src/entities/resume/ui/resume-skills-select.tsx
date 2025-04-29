import MultiSelect, { MultiSelectOption, MultiSelectProps } from '@/shared/ui/multi-select';

const SKILL_OPTIONS: MultiSelectOption[] = [
  { label: 'HTML5', value: 'HTML5' },
  { label: 'CSS3', value: 'CSS3' },
  { label: 'JavaScript (ES6+)', value: 'JavaScript (ES6+)' },
  { label: 'TypeScript', value: 'TypeScript' },
  { label: 'React', value: 'React' },
  { label: 'Vue.js', value: 'Vue.js' },
  { label: 'Angular', value: 'Angular' },
  { label: 'jQuery', value: 'jQuery' },
  { label: 'Node.js', value: 'Node.js' },
  { label: 'NestJS', value: 'NestJS' },
  { label: 'PostgreSQL', value: 'PostgreSQL' },
  { label: 'MongoDB', value: 'MongoDB' },
  { label: 'Redis', value: 'Redis' },
  { label: 'Docker', value: 'Docker' },
  { label: 'Kubernetes', value: 'Kubernetes' },
];

const ResumeSkillsSelect = (props: Omit<MultiSelectProps, 'options'>) => {
  return (
    <MultiSelect
      options={SKILL_OPTIONS}
      placeholder="Ваши основные навыки"
      searchable={true}
      {...props}
    />
  );
};

export default ResumeSkillsSelect;
