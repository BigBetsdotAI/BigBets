import React, { useState } from 'react';
import { ChipViewProps } from '../../types/index';


interface ChipItem {
  id: string;
  label: string;
  active?: boolean;
}

interface ChipViewProps {
  items: ChipItem[];
  onChipClick?: (chipId: string) => void;
  className?: string;
  variant?: 'default' | 'outlined';
  size?: 'small' | 'medium' | 'large';
}

const ChipView: React.FC<ChipViewProps> = ({
  items,
  onChipClick,
  className = '',
  variant = 'default',
  size = 'medium'
}) => {
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const handleChipClick = (chipId: string) => {
    setActiveChip(chipId);
    onChipClick?.(chipId);
  };

  const baseClasses = 'font-raleway transition-all duration-200 cursor-pointer rounded-sm border-0 focus:outline-none focus:ring-2 focus:ring-offset-1';
  
  const variants = {
    default: 'bg-chip text-secondary-custom hover:bg-gray-300 focus:ring-gray-400',
    outlined: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300'
  };

  const sizes = {
    small: 'px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm',
    medium: 'px-6 py-3 text-sm sm:px-8 sm:py-3 sm:text-base',
    large: 'px-8 py-4 text-base sm:px-10 sm:py-4 sm:text-lg'
  };

  const activeClasses = 'bg-primary text-white hover:bg-primary/90';

  return (
    <div className={`flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center items-center ${className}`}>
      {items.map((item) => {
        const isActive = activeChip === item.id || item.active;
        const chipClasses = `
          ${baseClasses}
          ${isActive ? activeClasses : variants[variant]}
          ${sizes[size]}
        `.trim().replace(/\s+/g, ' ');

        return (
          <button
            key={item.id}
            onClick={() => handleChipClick(item.id)}
            className={chipClasses}
            role="tab"
            aria-selected={isActive}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default ChipView;