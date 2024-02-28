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
    name: string;
    email: string;
  };
  setUser: (data: AuthContext["user"]) => void;
}

const authContext = createContext<AuthContext>({
  token: "",
  setToken: () => null,
  isAuthenticated: false,
  setIsAuthenticated: () => null,
  user: {
    name: "",
    email: "",
  },
  setUser: () => null,
});

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [token, setToken] = useState(localStorage.AUTH_TOKEN);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    localStorage.setItem("AUTH_TOKEN", token);
  }, [token]);

  return (
    <authContext.Provider
      value={{
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(authContext);
}
