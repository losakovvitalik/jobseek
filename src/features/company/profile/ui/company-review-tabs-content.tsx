import ReviewCard from '@/entities/review/ui/review-card';
import { AutoHeightTextarea } from '@/shared/ui/textarea';

const CompanyReviewTabsContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <AutoHeightTextarea
        placeholder={
          'Если вы работали в этой компании и хотите поделиться своим мнением, вы можете оставить отзыв о компании'
        }
      />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

export default CompanyReviewTabsContent;
