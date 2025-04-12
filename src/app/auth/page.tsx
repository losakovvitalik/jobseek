import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import Typography from '@/shared/ui/typography';

const AuthPage = () => {
  return (
    <div
      className={'mx-auto flex h-full w-9/12 flex-col items-center justify-center gap-4'}
    >
      <Tabs defaultValue="sign-in" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">Вход</TabsTrigger>
          <TabsTrigger value="sign-up">Регистрация</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <Card>
            <CardHeader>
              <CardTitle>
                <Typography variant={'subtitle'} className={'text-center'}>
                  Вход
                </Typography>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input
                  id="email"
                  type={'email'}
                  autoComplete={'email'}
                  placeholder={'email@example.com'}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className={'w-full'}>Войти</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="sign-up">
          <Card>
            <CardHeader>
              <CardTitle>
                <Typography variant={'subtitle'} className={'text-center'}>
                  Регистрация
                </Typography>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input
                  id="email"
                  type={'email'}
                  autoComplete={'email'}
                  placeholder={'email@example.com'}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className={'w-full'}>Зарегистрироваться</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <Card>
        <CardContent>
          <CardTitle>Я ищу сотрудников</CardTitle>
          <CardDescription className={'my-2'}>
            Если вы компания, которая нанимает и ищет новых сотрудников в команду
          </CardDescription>
          <Button className={'w-full'}>Поиск сотрудников</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
