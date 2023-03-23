import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useApp } from "../../firebase/firebase.context";

export const useLoginUser = () => {
    const app = useApp();
    const fetchLoginUser = async ({ email, password }) => {
        try {
            return await signInWithEmailAndPassword(
                getAuth(app),
                email,
                password
            );
        } catch (error) {
            console.error("signInWithEmailAndPassword");
        }
    };
    return { fetchLoginUser };
};
