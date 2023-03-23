import { Outlet } from "react-router-dom";
import NavBar from "./navBar";

export const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};
