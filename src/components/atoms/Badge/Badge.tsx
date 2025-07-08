import React from 'react';
import type { BadgeProps } from './Badge.type';

const baseStyle =
  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium shadow-sm border';

const variantStyles = {
  default: 'bg-gray-100 text-gray-800 border-gray-300',
  success: 'bg-green-100 text-green-800 border-green-300',
  danger: 'bg-red-100 text-red-800 border-red-300',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  info: 'bg-blue-100 text-blue-800 border-blue-300',
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'default',
  className = '',
}) => {
  return (
    <span className={`${baseStyle} ${variantStyles[variant]} ${className}`}>
      {label}
    </span>
  );
};
