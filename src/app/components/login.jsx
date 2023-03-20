import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signInUser } from "../../firebase";
import { startSession, isLoggedIn } from "../../session";
const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (isLoggedIn()) {
            navigate("/user");
        }
    }, [navigate]);

    const handleChangePass = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        // validate the inputs
        if (!email || !password) {
            setError("Введите ваш логин и пароль");
            return;
        }

        // clear the errors
        setError("");

        // TODO: send the login request
        try {
            let loginResponse = await signInUser(email, password);
            startSession(loginResponse.user);
            navigate("/user");
        } catch (error) {
            console.error("Неверный логин или пароль");
            setError("Неверный логин или пароль");
        }
    };

    return (
        <div className="auth">
            <h2>Авторизация</h2>
            <p className="text-danger">{error}</p>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Адрес электронной почты
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleChangeEmail}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Пароль
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={handleChangePass}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Войти
                </button>
            </form>
            <div className="d-flex justify-content-center mt-3">
                <Link
                    className="btn btn-outline-dark btn-sm"
                    to="/login/changePas"
                >
                    Забыли пароль
                </Link>

                <Link
                    className="btn btn-outline-dark btn-sm ms-3"
                    to="/login/registration"
                >
                    Регистрация
                </Link>
            </div>
        </div>
    );
};

export default Login;
