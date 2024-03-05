import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContext {
  token: string;
  setToken: (data: string) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (data: boolean) => void;
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
  setUser: (data: AuthContext["user"]) => void;
  logout: () => void;
}

const authContext = createContext<AuthContext>({
  token: "",
  setToken: () => null,
  isAuthenticated: false,
  setIsAuthenticated: () => null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  setUser: () => null,
  logout: () => null,
});

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [token, setToken] = useState(localStorage.AUTH_TOKEN);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(localStorage.USER);

  useEffect(() => {
    localStorage.setItem("AUTH_TOKEN", token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem("USER", JSON.stringify(user));
  }, [user]);

  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
  };

  return (
    <authContext.Provider
      value={{
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(authContext);
}
