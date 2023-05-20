import AuthPage from '@/components/AuthPage';
import UserPage from '@/components/UserPage';
import { CurrentUserContextType, UserContext } from '@/context/UserContext';
import { useContext, useEffect, useState } from 'react';

export default function Home() {
  const { user, setUser } = useContext(UserContext) as CurrentUserContextType;
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user') as string));
    }
  }, [setUser]);

  return <>{user.email ? <UserPage /> : <AuthPage />}</>;
}
