import ResumeCard from '@/entities/resume/ui/resume-card';
import PageTitle from '@/shared/ui/page-title';

const ResumePage = () => {
  return (
    <div>
      <PageTitle>Мои резюме</PageTitle>
      <div className={'flex flex-col gap-4'}>
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
      </div>
    </div>
  );
};

export default ResumePage;
