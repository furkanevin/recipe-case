import React from 'react';
import { 
  FiSearch, 
  FiGlobe, 
  FiClock, 
  FiArrowLeft, 
  FiRefreshCw, 
  FiArrowRight, 
  FiAlertTriangle, 
  FiHeart, 
  FiUsers, 
  FiChevronDown 
} from 'react-icons/fi';

interface IconProps {
  className?: string;
}

export const SearchIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <FiSearch className={className} />
);

export const CuisineIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <FiGlobe className={className} />
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <FiChevronDown className={className} />
);

export const TimeIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <FiClock className={className} />
);

export const BackIcon: React.FC<IconProps> = ({ className = "h-4 w-4" }) => (
  <FiArrowLeft className={className} />
);

export const RefreshIcon: React.FC<IconProps> = ({ className = "h-4 w-4" }) => (
  <FiRefreshCw className={className} />
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <FiArrowRight className={className} />
);

export const WarningIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
  <FiAlertTriangle className={className} />
);

export const ClockIcon: React.FC<IconProps> = ({ className = "h-8 w-8" }) => (
  <FiClock className={className} />
);

export const ServingsIcon: React.FC<IconProps> = ({ className = "h-8 w-8" }) => (
  <FiUsers className={className} />
);

export const HeartIcon: React.FC<IconProps> = ({ className = "h-8 w-8" }) => (
  <FiHeart className={className} />
); 