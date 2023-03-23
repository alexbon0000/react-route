import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import ChangePas from "../pages/changePas";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFoundPage from "../pages/notFoundPage";
import Registration from "../pages/registration";
import User from "../pages/user";
import { AuthOutlet, PrivareOutlet } from "./private";

export const CustomRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route element={<PrivareOutlet />}>
                    <Route path="/user" element={<User />} />
                </Route>
                <Route element={<AuthOutlet />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/login/changePas" element={<ChangePas />} />
                    <Route
                        path="/login/registration"
                        element={<Registration />}
                    />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};
