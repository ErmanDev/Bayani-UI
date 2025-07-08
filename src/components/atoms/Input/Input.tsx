import type { InputProps } from './Input.type';

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  disabled = false,
  error,
  icon,
  iconPosition = 'left',
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      {icon && iconPosition === 'left' && (
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
          {icon}
        </span>
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        className={`w-full px-4 py-2 rounded border ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${icon ? 'pl-10' : ''}`}
      />
      {icon && iconPosition === 'right' && (
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
          {icon}
        </span>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
