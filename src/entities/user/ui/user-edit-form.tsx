'use client';

import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import DateInput from '@/shared/ui/date-input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import PhoneInput from '@/shared/ui/phone-input';
import Typography from '@/shared/ui/typography';
import Image from 'next/image';
import useUserEditForm from '../hooks/use-user-edit-form';
import { User } from '../model/types';
import UserGenderSelect from './user-gender-select';
import UserSearchStatusSelect from './user-search-status-select';
import CitySelect from '@/entities/city/ui/city-select';

export interface UserEditFormProps {
  defaultValues?: User;
}

const UserEditForm = ({ defaultValues }: UserEditFormProps) => {
  const form = useUserEditForm({
    defaultValues: defaultValues,
  });

  return (
    <Form {...form}>
      <form className="mb-20 flex flex-col gap-4">
        <Card>
          <CardContent className="flex flex-col items-center gap-4">
            <Image
              className="h-20 w-20 rounded-full object-cover"
              src={`/avatar-placeholder.png`}
              alt="user avatar"
              width={80}
              height={80}
            />
            <Button variant={'secondary'}>Редактировать</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-4">
            <Typography variant={'subtitle'}>Основная информация</Typography>

            <FormField
              control={form.control}
              name="search_status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>Статус</Typography>
                  </FormLabel>
                  <FormControl>
                    <UserSearchStatusSelect {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>Имя</Typography>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>Фамилия</Typography>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="middle_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>Отчество</Typography>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>Пол</Typography>
                  </FormLabel>
                  <FormControl>
                    <UserGenderSelect {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>День рождения</Typography>
                  </FormLabel>
                  <FormControl>
                    <DateInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4">
            <Typography variant={'subtitle'}>Дополнительная информация</Typography>

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>Город проживания</Typography>
                  </FormLabel>
                  <FormControl>
                    <CitySelect {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4">
            <Typography variant={'subtitle'}>Контакты</Typography>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>Email</Typography>
                  </FormLabel>
                  <FormControl>
                    <Input type="email" autoComplete="email" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>Телефон</Typography>
                  </FormLabel>
                  <FormControl>
                    <PhoneInput placeholder="+7 (777) 777-77-77" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telegram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography>Телеграм</Typography>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="bg-accent pb-safe-area fixed bottom-0 left-0 flex w-full items-center justify-center p-4 lg:left-(--sidebar-width) lg:w-[calc(100%-var(--sidebar-width))]">
          <Button className="mb-4 w-full">Сохранить изменения</Button>
        </div>
      </form>
    </Form>
  );
};

export default UserEditForm;
