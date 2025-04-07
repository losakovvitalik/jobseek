import CompanyLink from '@/entities/company/ui/company-link';
import { Badge } from '@/shared/ui/badge';
import { Card, CardContent } from '@/shared/ui/card';
import PageTitle from '@/shared/ui/page-title';
import Typography from '@/shared/ui/typography';
import { Heart } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';

const PostPage = () => {
  return (
    <div>
      <PageTitle>Топ-5 навыков для IT-специалистов в 2024 году</PageTitle>
      <Typography className={'mb-4 font-bold'} size={'2xl'}>
        Топ-5 навыков для IT-специалистов в 2024 году
      </Typography>
      <CompanyLink className={'mb-4'} />
      <div className={'flex flex-col gap-4'}>
        <MDXRemote
          source={`
Технологии стремительно меняются, и чтобы оставаться востребованным на рынке, IT-специалисту нужно постоянно развиваться. Вот **5 ключевых навыков**, которые помогут устроиться на работу в 2025 году:  

#### **1. Искусственный интеллект и машинное обучение (AI/ML)**  
Спрос на специалистов по AI/ML продолжает расти. Умение работать с нейросетями, обработка данных и автоматизация процессов — must-have для многих вакансий.  

#### **2. Кибербезопасность**  
Чем больше цифровизация, тем выше угрозы. Опыт в защите данных, pentesting и знание frameworks (например, NIST, ISO 27001) будут критически важны.  

#### **3. Облачные технологии (Cloud: AWS, Azure, GCP)**  
Компании активно переходят в облака, поэтому навыки работы с **Kubernetes, Docker, serverless-архитектурами** и DevOps-практиками сильно повысят шансы на трудоустройство.  

#### **4. Программирование на современных языках**  
Помимо классических (Python, Java, C++), растёт спрос на:  
- **Rust** (для высоконагруженных систем),  
- **Go** (микросервисы, облака),  
- **TypeScript** (веб-разработка).  

#### **5. Soft Skills: коммуникация и управление проектами**  
Даже в IT без гибких навыков никуда. Умение работать в команде, презентовать идеи и понимание основ **Agile/Scrum** сделают вас ценнее в глазах работодателя.  

💡 **Вывод:** Техническая экспертиза + адаптивность к изменениям = ключ к успеху в IT. Какие из этих навыков у вас уже есть? Делитесь в комментариях!  
      `}
        />
      </div>

      <div className={'mt-2 flex gap-2'}>
        <Badge>IT</Badge>
        <Badge>КарьераВIT</Badge>
        <Badge>Развитие</Badge>
        <Badge>Технологии2025</Badge>
      </div>

      <Typography className={'mt-4'} variant={'subtitle'}>
        Комментарии
      </Typography>
      <div className={'mt-4'}>
        <Card>
          <CardContent>
            <CompanyLink />
            <Typography className={'mt-2'}>
              Очень хорошая статья, обязательно буду ждать продолжения!
            </Typography>
            <div className={'mt-2 flex justify-between'}>
              <div className={'flex gap-2'}>
                <Typography variant={'muted'} size={'sm'}>
                  23.02.2025 17:05
                </Typography>
                <Typography variant={'muted'} size={'sm'}>
                  Ответить
                </Typography>
              </div>
              <div className="flex items-center gap-1">
                <Heart className={'stroke-muted-foreground size-3'} />
                <Typography className="text-muted-foreground font-bold" size={'sm'}>
                  512
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className={'flex'}>
          <div className={'h-7 w-7 border-l border-b border-muted rounded-bl-2xl ml-3'}></div>
          <Card className={'mt-2'}>
            <CardContent>
              <CompanyLink />
              <Typography className={'mt-2'}>
                Очень хорошая статья, обязательно буду ждать продолжения!
              </Typography>
              <div className={'mt-2 flex justify-between'}>
                <div className={'flex gap-2'}>
                  <Typography variant={'muted'} size={'sm'}>
                    23.02.2025 17:05
                  </Typography>
                  <Typography variant={'muted'} size={'sm'}>
                    Ответить
                  </Typography>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className={'stroke-muted-foreground size-3'} />
                  <Typography className="text-muted-foreground font-bold" size={'sm'}>
                    512
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
