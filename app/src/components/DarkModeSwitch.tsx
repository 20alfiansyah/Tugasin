import { Switch } from '@/components/ui/switch';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface DarkModeSwitchProps {
  isDark: boolean;
  setDark: (checked: boolean) => void;
}

const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({ isDark, setDark }) => {
  return (
    <div className="flex items-center gap-3 justify-between w-full px-4">
      <div className="flex gap-3 items-center">
        {isDark ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
        <label htmlFor="" className="font-medium text-xs">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </label>
      </div>
      <Switch checked={isDark} onCheckedChange={setDark} />
    </div>
  );
};

export default DarkModeSwitch;
