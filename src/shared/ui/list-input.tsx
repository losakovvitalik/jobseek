// import { EducationForm } from '@/entities/resume';
// import { cn } from '@/lib/utils';
// import { Plus } from 'lucide-react';
// import { useState } from 'react';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
// import Typography from './typography';

// export interface ListInputProps {
//   value: Record<any, any>[] | undefined;
//   onCreate: (v: Record<any, any>) => void;
//   onEdit: (v: Record<any, any>) => void;
//   onRemove: (v: Record<any, any>) => void;
//   renderCard: (item: Record<any, any>) => React.ReactNode;
// }

// const ListInput = ({ value, onCreate, onEdit }: ListInputProps) => {
//   const [open, setOpen] = useState(false);

//   const handleSubmit = () => {};

//   const handleEdit = () => {};

//   return (
//     <div>
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <div
//             className={cn(
//               'bg-input flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed p-6',
//               {
//                 'p-2': !!value?.length,
//               },
//             )}
//           >
//             <Plus className="size-4" /> <Typography>Добавить образование</Typography>
//           </div>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]" onOpenAutoFocus={(e) => e.preventDefault()}>
//           <DialogHeader>
//             <DialogTitle>Образование</DialogTitle>
//             <EducationForm mode="create" onSubmit={handleSubmit} />
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>

//       <div className="mt-4 flex flex-col gap-2">
//         {value?.map((item) => {
//           return (
//             <EducationCard
//               key={item.name}
//               onSubmit={handleEditEducation}
//               education={item}
//               onRemove={handleRemoveEducation}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ListInput;
