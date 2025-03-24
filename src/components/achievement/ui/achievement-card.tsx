import { Card, CardContent } from "@/shared/ui/card";
import Typography from "@/shared/ui/typography";
import { Trophy } from "lucide-react";

const AchievementCard = () => {
  return (
    <div>
      <Card className="flex aspect-square w-full items-center justify-center p-0">
        <CardContent className="p-2">
          <Trophy className="mx-auto mb-1 size-8" />
          <Typography className="text-center" size={'xs'}>
            Победил в 10 хакатонах!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AchievementCard;
