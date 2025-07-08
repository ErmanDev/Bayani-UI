import React, { useEffect } from 'react';
import type { AlertProps } from './Alert.type';

const typeStyles = {
  success: 'bg-green-100 text-green-700 border border-green-300',
  error: 'bg-red-100 text-red-700 border border-red-300',
  warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
  info: 'bg-blue-100 text-blue-700 border border-blue-300',
};

const positionStyles = {
  tLeft: 'fixed top-4 left-4',
  tRight: 'fixed top-4 right-4',
  bLeft: 'fixed bottom-4 left-4',
  bRight: 'fixed bottom-4 right-4',
};

export const Alert: React.FC<AlertProps> = ({
  title = 'Alert Title',
  message = 'This is an alert message.',
  className,
  variant = 'success',
  duration = 3000,
  onClose,
  position = 'tRight',
}) => {
  const [visible, setVisible] = React.useState(true);
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);
  if (!visible) return null;
  return (
    <div
      className={`p-4 rounded-lg shadow-sm ${typeStyles[variant]} ${positionStyles[position]} ${className}`}
      role="alert"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm">{message}</p>
    </div>
  );
};
