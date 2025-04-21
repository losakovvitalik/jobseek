import { useState } from 'react';
import { Input } from './input';
import MonthSelect from './month-select';

const YearMonthInput = () => {
  const [year, setYear] = useState<string>();
  const [month, setMonth] = useState<number>();

  return (
    <div>
      <Input value={year} onChange={(e) => setYear(e.currentTarget.value)} />
      <MonthSelect value={month} onChange={(v) => setMonth(v)} />
    </div>
  );
};

export default YearMonthInput;
