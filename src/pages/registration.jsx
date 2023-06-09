import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "../hooks/firebase/useCreateUser";

const Registration = () => {
    const { fetchCreateUser } = useCreateUser();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const goBack = () => {
        navigate(-1);
    };

    const handleChangePass = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    };
    const handleChangePass2 = (e) => {
        setPassword2(e.target.value);
        console.log(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();

        // validate the inputs
        if (!email || !password || !password2) {
            setError("Заполнены не все поля");
            return;
        }
        if (password !== password2) {
            setError("Пароли не совпадают");
            return;
        }
        setError("");

        try {
            let registerResponse = await fetchCreateUser({ email, password });
            navigate("/login");
        } catch (error) {
            console.error("Данный email уже существует");
            setError("Данный email уже существует");
        }
    };

    return (
        <>
            <div className="auth">
                <h2>Регистрация</h2>
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
                    <div className="mb-3">
                        <label htmlFor="password2" className="form-label">
                            Повторите пароль
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password2"
                            value={password2}
                            onChange={handleChangePass2}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Регистрация
                    </button>
                </form>
                <div className="d-flex justify-content-center mt-3">
                    <button
                        className="btn btn-outline-dark btn-sm ms-3"
                        onClick={goBack}
                    >
                        Назад
                    </button>
                </div>
            </div>
        </>
    );
};

export default Registration;
