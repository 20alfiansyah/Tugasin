import { Button } from '@/components/ui/button';
import { ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

interface NavbarItemProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  path: string;
  isActive: boolean;
  isCollapsible?: boolean;
  subItems?: { label: string; path: string }[]; // Add this
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  icon: Icon,
  label,
  path,
  isActive,
  isCollapsible,
  subItems = [],
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return isCollapsible ? (
    (console.log(subItems),
    (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
        <div className="flex items-center justify-between space-x-4">
          <CollapsibleTrigger asChild>
            <Button
              onClick={() => navigate(path)}
              className={`py-5 w-full border-0 flex justify-start bg-transparent text-muted-foreground text-xs shadow-none hover:bg-primary/20 ${
                isActive ? 'font-bold text-primary bg-primary/20' : ''
              }`}
            >
              <div className="w-full flex gap-3 items-center">
                <Icon className="w-6 h-6" />
                {label}
              </div>
              <CaretSortIcon />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          {subItems.map((subItem) => (
            <Button
              onClick={() => navigate(subItem.path)}
              className="px-4 py-2 w-full text-left text-xs"
            >
              {subItem.label}
            </Button>
          ))}
        </CollapsibleContent>
      </Collapsible>
    ))
  ) : (
    <Button
      onClick={() => navigate(path)}
      className={`py-5 border-0 flex gap-3 justify-start bg-transparent text-muted-foreground text-xs shadow-none hover:bg-primary/20 ${
        isActive ? 'font-bold text-primary bg-primary/20' : ''
      }`}
    >
      <Icon className="w-6 h-6" />
      {label}
    </Button>
  );
};

export default NavbarItem;
