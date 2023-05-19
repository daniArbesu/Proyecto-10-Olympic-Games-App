import AuthPage from '@/components/AuthPage';
import { useState } from 'react';

export default function Home() {
  const [userLogged, setUserLogged] = useState(false);

  return <>{userLogged ? null : <AuthPage />}</>;
}
