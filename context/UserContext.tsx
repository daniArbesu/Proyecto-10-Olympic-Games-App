import { UserToken } from '@/types';
import { useState, createContext, ReactNode } from 'react';

export interface CurrentUserContextType {
  user: UserToken;
  setUser: (user: UserToken) => void;
}

type Props = {
  children: ReactNode;
};

// first we create the user context
export const UserContext = createContext<CurrentUserContextType | null>(null);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserToken>({ email: '', token: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
