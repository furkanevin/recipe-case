import React from 'react';
import Button from '@/components/ui/Button';
import { BackIcon } from '@/components/icons/IconCollection';

type BackButtonProps = {
  href?: string;
  variant?: 'primary' | 'secondary' | 'link';
  className?: string;
  text?: string;
};

const BackButton: React.FC<BackButtonProps> = ({
  href = '..',
  variant = 'primary',
  className = '',
  text = 'Back to Search'
}) => {
  return (
    <Button href={href} variant={variant} className={className}>
      <BackIcon className="mr-2 size-5" />
      {text}
    </Button>
  );
};

export default BackButton; 