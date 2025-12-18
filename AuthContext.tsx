import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User, users } from './users';

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Attempt to get user from localStorage on initial load
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('controlly_user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email: string): boolean => {
    // Find user in our mock data
    const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('controlly_user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('controlly_user');
  };

  const value = {
    user,
    isAuthenticated: user !== null,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};