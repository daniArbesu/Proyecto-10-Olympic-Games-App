import { UserToken } from '@/types';
import { useState, createContext, ReactNode, useEffect } from 'react';

export interface CurrentUserContextType {
  user: UserToken;
  setUser: (user: UserToken) => void;
}

type Props = {
  children: ReactNode;
};

const defaultUser = {
  email: '',
  token: '',
};

// first we create the user context
export const UserContext = createContext<CurrentUserContextType | null>(null);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserToken>(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
