import { useContext } from "react";
import { app } from "./firebase";
import React from "react";

const FirebaseContext = React.createContext(undefined);

export const FirebaseProvider = ({ children }) => {
    return (
        <FirebaseContext.Provider value={{ app }}>
            {children}
        </FirebaseContext.Provider>
    );
};
export const useApp = () => {
    const context = useContext(FirebaseContext);
    if (context === undefined) {
        throw new Error("FirebaseContext");
    }
    return context.app;
};
