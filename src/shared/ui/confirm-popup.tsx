import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/shared/ui/alert-dialog';
import { PropsWithChildren } from 'react';

interface ConfirmPopup extends PropsWithChildren {
  onCancel?: () => void;
  onConfirm?: () => void;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  title?: string;
  description?: string;
}

const ConfirmPopup = ({
  onCancel,
  onConfirm,
  onOpenChange,
  open,
  title,
  description,
  children,
}: ConfirmPopup) => {
  return (
    <AlertDialog onOpenChange={onOpenChange} open={open}>
      <AlertDialogContent className="w-11/12 rounded-lg">
        <AlertDialogHeader>
          {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
          {description && <AlertDialogDescription>{description}</AlertDialogDescription>}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Отменить</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Подтвердить</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
    </AlertDialog>
  );
};

export default ConfirmPopup;
