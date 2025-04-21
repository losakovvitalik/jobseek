import ListInput from '@/shared/ui/list-input';
import Typography from '@/shared/ui/typography';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import { ControllerRenderProps } from 'react-hook-form';
import { ResumeFormSchemaType } from '../model/resume-form-schema';
import ExperienceForm from './experience-form';

export interface ExperienceInputProps {
  field: ControllerRenderProps<ResumeFormSchemaType, 'experience'>;
}

const ExperienceInput = ({ field }: ExperienceInputProps) => {
  const formatDate = (value: string) => {
    return format(value, 'yyyy MMM', { locale: ru });
  };

  return (
    <ListInput
      value={field?.value}
      entityName="Опыт работы"
      onChange={field.onChange}
      renderCardContent={(value) => {
        return (
          <div>
            <Typography className="font-semibold">{value.position}</Typography>
            <Typography size={'sm'} variant={'muted'}>
              {value.organization}, {formatDate(value.start_date)} - {formatDate(value.end_date)}
            </Typography>
          </div>
        );
      }}
      renderForm={(props) => <ExperienceForm {...props} />}
    />
  );
};

export default ExperienceInput;
