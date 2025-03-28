import Typography from '@/shared/ui/typography';
import { TabsContent } from '@radix-ui/react-tabs';

const UserInfoTabsContent = () => {
  return (
    <TabsContent value="info">
      <Typography>Стаж работы: 5 лет</Typography>
      <Typography>Возраст: 26 лет</Typography>
      <Typography>Пол: Мужской</Typography>
      <Typography>Email: losakovvitalik@gmail.com</Typography>
    </TabsContent>
  );
};

export default UserInfoTabsContent;
