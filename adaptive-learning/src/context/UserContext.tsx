import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface UserData {
  name: string;
  email: string;
  selectedCourses: number[];
  learningStyle: string;
  studyGoals: string;
  studyHours: string;
}

interface UserContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserDataState] = useState<UserData | null>(() => {
    const savedData = localStorage.getItem('userData');
    return savedData ? JSON.parse(savedData) : null;
  });

  const setUserData = (data: UserData) => {
    setUserDataState(data);
    localStorage.setItem('userData', JSON.stringify(data));
  };

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 