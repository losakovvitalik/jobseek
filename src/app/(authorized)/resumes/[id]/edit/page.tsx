import { EditResumeForm } from '@/features/edit-resume';
import PageTitle from '@/shared/ui/page-title';

const EditResumePage = () => {
  return (
    <div>
      <PageTitle>Редактирование резюме</PageTitle>
      <EditResumeForm />
    </div>
  );
};

export default EditResumePage;
