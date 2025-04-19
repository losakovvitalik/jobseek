import { Education } from '../model/types';
import { EDUCATION_TYPE_OPTIONS } from '../ui/education-type-select';

const getDescriptionFromEducation = (education: Education): string => {
  return [
    EDUCATION_TYPE_OPTIONS.find((op) => op.value === education.type)?.label,
    education.organization,
    education.year,
  ]
    .filter((v) => v)
    .join(', ');
};

export default getDescriptionFromEducation;
