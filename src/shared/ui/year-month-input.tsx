import { useEffect, useState } from 'react';
import { Input } from './input';
import MonthSelect from './month-select';

export interface YearMonthInputProps {
  value?: string;
  onChange: (v: string) => void;
}

const YearMonthInput = ({ value, onChange }: YearMonthInputProps) => {
  const [year, setYear] = useState<string | undefined>(
    value ? new Date(value).getFullYear().toString() : undefined,
  );
  const [month, setMonth] = useState<number | undefined>(
    value ? new Date(value).getMonth() : undefined,
  );

  useEffect(() => {
    if (year && month !== undefined) {
      onChange(new Date(parseInt(year), month, 1).toISOString());
    }
  }, [year, month, onChange]);

  return (
    <div className="grid grid-cols-[1fr_3fr] gap-4">
      <Input value={year} onChange={(e) => setYear(e.currentTarget.value)} />
      <MonthSelect value={month} onChange={(v) => typeof v === 'number' && setMonth(v)} />
    </div>
  );
};

export default YearMonthInput;
