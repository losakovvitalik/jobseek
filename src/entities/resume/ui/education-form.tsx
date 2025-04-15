import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import Select from '@/shared/ui/select';
import Typography from '@/shared/ui/typography';
import useEducationForm from '../hooks/use-education-form';

const EducationForm = () => {
  const form = useEducationForm();

  return (
    <div>
      <Form {...form}>
        <form className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Typography>Название</Typography>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Наименование организации" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Typography>Тип образования</Typography>
                </FormLabel>
                <FormControl>
                  <Select
                    options={[
                      {
                        label: 'Университет',
                        value: 1,
                      },
                      {
                        label: 'Онлайн курсы',
                        value: 2,
                      },
                    ]}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="mt-4 w-full" type="submit">
            Добавить образование
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EducationForm;
