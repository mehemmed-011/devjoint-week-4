import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const AuthContext = createContext(null);

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };

    case "LOGOUT":
      return {
        user: null,
        token: null,
        isAuthenticated: false,
      };

    case "RESTORE_SESSION":
      return {
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };

    default:
      return state;
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        const user = JSON.parse(storedUser);

        dispatch({
          type: "RESTORE_SESSION",
          payload: {
            user,
            token,
          },
        });
      } catch (error) {
        console.error("Sessiya məlumatları oxunarkən xəta:", error);

        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  const login = (user, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    dispatch({
      type: "LOGIN",
      payload: {
        user,
        token,
      },
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
