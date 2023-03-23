import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useApp } from "../../firebase/firebase.context";

export const useCreateUser = () => {
    const app = useApp();
    const fetchCreateUser = async ({ email, password }) => {
        try {
            return await createUserWithEmailAndPassword(
                getAuth(app),
                email,
                password
            );
        } catch (error) {
            console.error("createUserWithEmailAndPassword");
        }
    };
    return { fetchCreateUser };
};
