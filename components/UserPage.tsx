import { CurrentUserContextType, UserContext } from '@/context/UserContext';
import { PageTitle } from '@/styles/PageStyles';
import { useContext } from 'react';

const UserPage = () => {
  const { user } = useContext(UserContext) as CurrentUserContextType;
  return <PageTitle>Welcome {user.email}</PageTitle>;
};

export default UserPage;
