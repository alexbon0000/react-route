import { useState } from "react";

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleChangePass = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <form action="">
            <div className="divInput">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
            </div>
            <div className="divInput">
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handleChangePass}
                />
            </div>
            <div className="formBtn">
                <button>Войти</button>
            </div>
        </form>
    );
};

export default FormLogin;
