import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../hooks/firebase/useLoginUser";

export const useAuth = () => {
    const { fetchLoginUser } = useLoginUser();
    const navigate = useNavigate();

    const login = async ({ email, password }) => {
        const user = await fetchLoginUser({ email, password });
        console.log(user);
        if (user) {
            localStorage.setItem("email", user.email);
            localStorage.setItem("accessToken", user.accessToken);
            navigate("/user");
        } else {
            console.error("Не зашел");
        }
    };

    const getSession = () => {
        return {
            email: localStorage.getItem("email") ?? null,
            accessToken: localStorage.getItem("accessToken") ?? null,
        };
    };

    const endSession = () => {
        localStorage.clear();
        navigate("/login");
    };

    const isLoggedIn = () => {
        const { email } = getSession();
        return email;
    };

    return { login, getSession, endSession, isLoggedIn };
};
