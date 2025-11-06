import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ progress = 0, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
        >
          <div className="w-full max-w-md mx-auto p-6 text-center">
            <div className="relative h-24">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">Loading {progress}%</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mt-16">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                  className="h-full bg-black"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
