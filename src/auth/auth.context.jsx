import { useContext } from "react";
import { useAuth } from "./useAuth";
import React from "react";
const AuthContext = React.createContext(undefined);
export const AuthProvider = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const email = isLoggedIn();

    return (
        <AuthContext.Provider value={{ email }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthApp = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("AuthContext");
    }
    return context.email;
};
