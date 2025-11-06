import React from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ progress = 0 }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="w-80 max-w-[80vw] rounded-2xl bg-zinc-900 p-5 shadow-xl ring-1 ring-white/10">
        <div className="mb-3 flex items-center justify-between text-sm text-white/80">
          <span>Preparing your download…</span>
          <span>{Math.min(100, Math.round(progress))}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, progress)}%` }}
            transition={{ ease: 'easeOut' }}
            className="h-full rounded-full bg-emerald-500"
          />
        </div>
      </div>
    </div>
  );
}
