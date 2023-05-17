import LoginForm from '@/components/LoginForm';
import { PageTitle } from '@/styles/PageStyles';
import { useState } from 'react';

export default function Home() {
  const [userLogged, setUserLogged] = useState(false);

  return (
    <main>
      <PageTitle>Olympic Games App</PageTitle>
      {userLogged ? null : <LoginForm />}
    </main>
  );
}
