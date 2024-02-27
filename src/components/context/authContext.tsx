import { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContext {
  token: string;
  setToken: any;
  isAuthenticated: boolean;
  setIsAuthenticated: any;
}

const authContext = createContext<AuthContext>({
  token: "",
  setToken: () => null,
  isAuthenticated: false,
  setIsAuthenticated: () => null,
});

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <authContext.Provider
      value={{ token, setToken, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(authContext);
}
