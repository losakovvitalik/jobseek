import { CardDescription } from '@/shared/ui/card';
import ListInput from '@/shared/ui/list-input';
import Typography from '@/shared/ui/typography';
import { ControllerRenderProps } from 'react-hook-form';
import { ResumeFormSchemaType } from '../model/resume-form-schema';
import getDescriptionFromEducation from '../utils/getDescriptionFromEducation';
import EducationForm from './education-form';

export interface EducationInputProps {
  field: ControllerRenderProps<ResumeFormSchemaType, 'education'>;
}

const EducationInput = ({ field }: EducationInputProps) => {
  return (
    <ListInput
      value={field.value}
      onChange={field.onChange}
      entityName="Образование"
      renderCardContent={(education) => {
        const cardDescription = getDescriptionFromEducation(education);

        return (
          <div>
            <Typography className="font-semibold">{education.name}</Typography>
            {cardDescription && <CardDescription>{cardDescription}</CardDescription>}
          </div>
        );
      }}
      renderForm={(props) => <EducationForm {...props} />}
    />
  );
};

export default EducationInput;
