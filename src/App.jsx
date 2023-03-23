import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CustomRoute } from "./router/route";
import { AuthProvider } from "./auth/auth.context";
import { FirebaseProvider } from "./firebase/firebase.context";

const App = () => {
    return (
        <React.StrictMode>
            <FirebaseProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <CustomRoute />
                    </AuthProvider>
                </BrowserRouter>
            </FirebaseProvider>
        </React.StrictMode>
    );
};

export default App;
