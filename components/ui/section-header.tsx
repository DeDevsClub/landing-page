import React from 'react';

interface SectionHeaderProps {
  title: string;
  content?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, content }) => {
  return (
    <div className={`
      ${content ? "grid" : "flex"} 
      w-full justify-start items-center 
      px-8 py-8 my-2 
      text-2xl sm:text-3xl lg:text-4xl
      font-bold text-[#f143a9] 
      border-b-2 border-[#f143a9]
      bg-background backdrop-blur-sm shadow-lg 
      transform transition-transform duration-300
      rounded-t-lg`}>
        {title}
        {content && <div className="text-[#e0e0ff] md:text-lg flex mt-2 md:mt-0">{content}</div>}
    </div>
  );
};
