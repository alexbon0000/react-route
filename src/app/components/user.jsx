import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { endSession, getSession, isLoggedIn } from "../../session";

const User = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/login");
        }

        let session = getSession();
        setEmail(session.email);

        console.log("Your access token is: " + session.accessToken);
    }, [navigate]);

    const onLogout = () => {
        endSession();
        navigate("/login");
    };

    return (
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
    );
};

export default User;
