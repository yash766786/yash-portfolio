import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-1 sm:gap-4 justify-items-center",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.name}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
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
          <Card>
            <CardDescription>{item.icon}</CardDescription>
            <CardTitle>{item.name}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full p-2 sm:p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="z-50 flex flex-col items-center justify-items-center gap-1 sm:gap-2">
        <div className="p-2 sm:p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="text-sm text-gray-700 dark:text-gray-300 pt-2">
      {children}
    </div>
  );
};

export const CardDescription = ({
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="justify-items-center-safe p-2 sm:p-4 bg-gray-100 dark:bg-neutral-800 rounded-full shadow text-[20px] sm:text-[28px]">
      {children}
    </div>
  );
};
