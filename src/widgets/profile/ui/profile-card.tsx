import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/shared/ui/card';
import Typography from '@/shared/ui/typography';
import Image from 'next/image';

export interface ProfileCardProps {
  imageUrl?: string;
  name: React.ReactNode;
  description?: string;
  className?: string;
}

const ProfileCard = ({ description, imageUrl, name, className}: ProfileCardProps) => {
  return (
    <Card className={cn("", className)}>
      <CardContent>
        <div className="flex items-center gap-4">
          {imageUrl && (
            <Image
              className="h-20 w-20 rounded-full object-cover"
              src={imageUrl}
              alt="user avatar"
              width={80}
              height={80}
            />
          )}
          <div>
            {name}
            {description && (
              <Typography className="text-muted-foreground">
                {description}
              </Typography>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
