import { useAuth } from "../auth/useAuth";

const User = () => {
    const { endSession, getSession } = useAuth();
    const email = getSession().email;
    console.log(getSession().accessToken);

    const onLogout = () => {
        endSession();
    };
    return (
        <>
            <div className="home">
                <h1>User</h1>
                <p>{email}</p>
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
