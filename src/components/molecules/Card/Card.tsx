import React from 'react';
import type { CardProps } from './Card.type';

export const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-6 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};
