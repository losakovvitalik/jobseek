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
import { isValidElement, PropsWithChildren } from 'react';

export interface ConfirmPopupProps extends PropsWithChildren {
  onCancel?: () => void;
  onConfirm?: () => void;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  title: string;
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
}: ConfirmPopupProps) => {
  const trigger = isValidElement(children) ? children : <button>{children}</button>;

  return (
    <AlertDialog onOpenChange={onOpenChange} open={open}>
      <AlertDialogContent className="w-11/12 rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Отменить</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Подтвердить</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
    </AlertDialog>
  );
};

export default ConfirmPopup;
