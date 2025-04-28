import ListInput from '@/shared/ui/list-input';
import Typography from '@/shared/ui/typography';
import { ControllerRenderProps } from 'react-hook-form';
import { UserFormSchemaType } from '../model/user-form-schema';
import LanguageForm from './language-form';
import { LANGUAGE_LEVEL_OPTIONS } from './language-form-level-select';
import { LANGUAGE_OPTIONS } from './language-select';

export interface ExperienceInputProps {
  field: ControllerRenderProps<UserFormSchemaType, 'languages'>;
}

const UserLanguageInput = ({ field }: ExperienceInputProps) => {
  return (
    <ListInput
      value={field?.value}
      entityName="язык"
      onChange={field.onChange}
      renderCardContent={(value) => {
        return (
          <div>
            <Typography className="font-semibold">
              {LANGUAGE_OPTIONS.find((op) => op.value === value.id)?.label}
            </Typography>
            <Typography size={'sm'} variant={'muted'}>
              {LANGUAGE_LEVEL_OPTIONS.find((op) => op.value === value.id)?.label}
            </Typography>
          </div>
        );
      }}
      renderForm={(props) => <LanguageForm {...props} />}
    />
  );
};

export default UserLanguageInput;
