'use client'; 
import JobCard from '@/entities/job/ui/JobCard';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="h-full p-4">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.x > 100) {
            console.log('swipe right')
          };
          if (info.offset.x < -100) {
            console.log('swipe left')
          };
        }}
      >
        <JobCard />
      </motion.div>
    </div>
  );
}
