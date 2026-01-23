import { createContext, type ReactNode, useContext } from "react";

interface UserDataInterface {
  name: string;
  role: "teacher" | "student";
}

const UserDataContext = createContext<UserDataInterface | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserDataContext.Provider
      value={{
        name: "Rajab",
        role: "student",
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserData = () => {
  const userData = useContext(UserDataContext);
  return userData;
};
