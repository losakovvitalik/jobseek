import { InputProps } from 'react-day-picker';
import StringHelper from '../utils/string-helper';
import { Input } from './input';
import Typography from './typography';

export interface UnitInputProps extends InputProps {
  unit?: string;
}

function UnitInput({ unit, ...props }: UnitInputProps) {
  return (
    <div className="relative">
      <Input
        suppressHydrationWarning
        style={{
          paddingRight: unit && `${StringHelper.getTextWidth(unit) + 22}px`,
        }}
        {...props}
      />

      <Typography className="absolute top-1/2 right-3 -translate-y-1/2">{unit}</Typography>
    </div>
  );
}

export default UnitInput;
