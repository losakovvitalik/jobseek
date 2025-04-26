'use client';
import { Button } from '@/shared/ui/button';
import { Bell, BellRing } from 'lucide-react';
import { useState } from 'react';

const ToggleNotificationsButton = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Button onClick={() => setEnabled((prev) => !prev)} variant={'outline'}>
      {enabled ? <BellRing /> : <Bell />}
      {enabled ? 'Включить уведомления' : 'Выключить уведомления'}
    </Button>
  );
};

export default ToggleNotificationsButton;
