import { Navigate, Outlet } from "react-router-dom";
import { useAuthApp } from "../auth/auth.context";

export const PrivareOutlet = () => {
    const auth = useAuthApp();
    return auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export const AuthOutlet = () => {
    const auth = useAuthApp();
    return !auth ? <Outlet /> : <Navigate to={"/user"} />;
};
