import ListInput from '@/shared/ui/list-input';
import Typography from '@/shared/ui/typography';
import { ControllerRenderProps } from 'react-hook-form';
import { ResumeFormSchemaType } from '../model/resume-form-schema';
import ExperienceForm from './experience-form';

export interface ExperienceInputProps {
  field: ControllerRenderProps<ResumeFormSchemaType, 'experience'>;
}

const ExperienceInput = ({ field }: ExperienceInputProps) => {
  return (
    <ListInput
      value={field?.value}
      entityName="Опыт работы"
      onChange={field.onChange}
      renderCard={(value) => {
        return (
          <div>
            <Typography className="font-semibold">{value.position}</Typography>
            <Typography size={'sm'} variant={'muted'}>
              {value.organization}
            </Typography>
          </div>
        );
      }}
      renderForm={(props) => <ExperienceForm {...props} />}
    />
  );
};

export default ExperienceInput;
