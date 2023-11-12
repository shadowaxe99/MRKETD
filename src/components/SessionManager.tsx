import React, { createContext, useContext, useState } from 'react';
import { IUser } from '../models/User';

interface ISessionContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const SessionContext = createContext<ISessionContext | undefined>(undefined);

export const SessionProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
