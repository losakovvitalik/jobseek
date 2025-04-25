import MultiSelect, { MultiSelectOption, MultiSelectProps } from '@/shared/ui/multi-select';

const WORK_SCHEDULE_OPTIONS: MultiSelectOption[] = [
  {
    label: 'Полный день',
    value: 1,
  },
  {
    label: 'Сменный график',
    value: 2,
  },
  {
    label: 'Гибкий график',
    value: 3,
  },
  {
    label: 'Удалённая работа',
    value: 4,
  },
  {
    label: 'Вахтовый метод',
    value: 5,
  },
];

const ResumeWorkScheduleSelect = (props: Omit<MultiSelectProps, 'options'>) => {
  return (
    <MultiSelect
      options={WORK_SCHEDULE_OPTIONS}
      placeholder="Комфортный для вас график работы"
      {...props}
    />
  );
};

export default ResumeWorkScheduleSelect;
