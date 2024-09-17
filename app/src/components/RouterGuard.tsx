import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface RouterGuardProps {
  element: React.ReactElement;
  isPublic?: boolean;
}

const RouterGuard: React.FC<RouterGuardProps> = ({ element, isPublic }) => {
  const navigate = useNavigate();

  const hasJWT = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  useEffect(() => {
    if (hasJWT() && isPublic) {
      navigate('/home'); // Redirect authenticated users from public routes to /home
    } else if (!hasJWT() && !isPublic) {
      navigate('/login'); // Redirect unauthenticated users to /login for private routes
    }
  }, [isPublic, navigate]);

  return (!isPublic && !hasJWT()) || (isPublic && hasJWT()) ? null : element;
};

export default RouterGuard;
