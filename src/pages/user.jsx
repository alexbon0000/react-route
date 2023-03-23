import { useAuthApp } from "../auth/auth.context";
import { useAuth } from "../auth/useAuth";
import NavBarAuth from "../components/navBarAuth";

const User = () => {
    const { endSession } = useAuth();
    const auth = useAuthApp();

    const onLogout = () => {
        endSession();
    };
    return (
        <>
            <div className="home">
                <h1>User</h1>
                <p>{auth}</p>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onLogout}
                >
                    Выйти
                </button>
            </div>
        </>
    );
};

export default User;
