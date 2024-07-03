import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import { Meteors } from "@/components/ui/meteor";
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
   Icon: IconType
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.Icon
       return(
       <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
           
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
         <div className="rounded-md w-full p-4 overflow-hidden bg-white dark:bg-slate-900 border border-slate-600 group-hover:ring-2
                     ring-indigo-500-500 relative z-20 transition-all duration-500 cursor-pointer"
         > 
                  <div className="py-10 z-10 relative space-y-5 ">
                        <Icon className="w-8 h-8 mx-auto"/>
                        <div>
                            <h1 className="text-3xl font-bold tect-green-300 text-center">{item?.text}</h1>
                        </div>
                    </div>
                  <Meteors number={20} />
            </div>
        </div>
 )})}
    </div>
  );
};