import * as React from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Assuming you're using Heroicons for the eye icon
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftAddon?: React.ReactElement;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', leftAddon, ...props }, ref) => {
    const [textVisible, setTextVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
      setTextVisible((prev) => !prev);
    };

    const inputType = type === 'password' && textVisible ? 'text' : type;

    return (
      <div
        className={cn(
          'flex items-center bg-transparent shadow-sm relative py-3',
          className,
        )}
      >
        {leftAddon && <div className="absolute left-3">{leftAddon}</div>}
        <input
          type={inputType}
          className={cn(
            'flex absolute h-9 w-full bg-transparent px-3 py-5 border-2 rounded-lg text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            leftAddon || type === 'password' ? 'px-11' : '',
          )}
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={togglePasswordVisibility}
          >
            {textVisible ? (
              <EyeIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <EyeSlashIcon className="w-5 h-5 text-gray-500" />
            )}
          </button>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
