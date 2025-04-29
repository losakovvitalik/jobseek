import { resumesMock } from '@/entities/resume/model/resume.mock';
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
        <Button className="my-4 w-full" asChild>
          <Link href={paths.resumes.create}>Создать новое резюме</Link>
        </Button>
      </div>
      <div className={'flex flex-col gap-4'}>
        {resumesMock.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    </div>
  );
};

export default ResumePage;
