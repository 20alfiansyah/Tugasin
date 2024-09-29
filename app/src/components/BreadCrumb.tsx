import { useNavigate, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const BreadCrumbs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const breadcrumbMap: { [key: string]: string } = {
    '/home': 'Dashboard',
    '/home/task': 'Task',
  };

  const breadcrumbItems = location.pathname
    .split('/')
    .filter(Boolean)
    .map((path, index) => {
      const fullPath = `/${location.pathname
        .split('/')
        .slice(1, index + 2)
        .join('/')}`;
      return {
        label: breadcrumbMap[fullPath] || path,
        path: fullPath,
      };
    });

  return (
    <Breadcrumb className="font-Poppins text-sm font-semibold">
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => navigate(item.path)}>
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
