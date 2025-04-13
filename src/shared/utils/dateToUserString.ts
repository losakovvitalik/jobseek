import { differenceInDays, format, isToday, isYesterday } from 'date-fns';
import { ru } from 'date-fns/locale'; // Импорт русской локализации

export function dateToUserString(date: Date | string): string {
  const timeFormat = 'HH:mm'; // 24-часовой формат
  const baseOptions = { locale: ru }; // Подключаем русскую локаль

  if (isToday(date)) {
    return `Сегодня в ${format(date, timeFormat, baseOptions)}`;
  }

  if (isYesterday(date)) {
    return `Вчера в ${format(date, timeFormat, baseOptions)}`;
  }

  const daysAgo = differenceInDays(new Date(), date);

  if (daysAgo > 0 && daysAgo <= 6) {
    return `${format(date, 'EEEE', baseOptions)} в ${format(date, timeFormat, baseOptions)}`.toLowerCase();
  }

  return `${format(date, 'd MMMM y', baseOptions)} в ${format(date, timeFormat, baseOptions)}`;
}
