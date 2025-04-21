import ResumeCard from '@/entities/resume/ui/resume-card';
import { paths } from '@/lib/paths';
import { Button } from '@/shared/ui/button';
import PageTitle from '@/shared/ui/page-title';
import Link from 'next/link';

const ResumePage = () => {
  return (
    <div>
      <PageTitle>Мои резюме</PageTitle>
      <div>
        <Button className="w-full my-4" asChild>
          <Link href={paths.resumes.create}>Создать новое резюме</Link>
        </Button>
      </div>
      <div className={'flex flex-col gap-4'}>
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
      </div>
    </div>
  );
};

export default ResumePage;
