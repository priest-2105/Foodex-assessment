import React from "react";

interface GreenTagProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export default function GreenTag({ icon, text, className }: GreenTagProps) {
  return (
    <div
      className={`
        bg-[#009F79] text-white px-4 py-2 rounded-lg border-2 border-white 
        block items-center gap-4 shadow-lg
        ${className}
      `}
    >
      <div className="bg-[#1E735E] w-fit text-xs p-1 mb-1 rounded-full">
        {icon}
      </div>
      <p className="text-xs font-medium">
        {text}
      </p>
    </div>
  );
}

