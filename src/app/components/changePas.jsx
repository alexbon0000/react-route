import { Link } from "react-router-dom";
import { useState } from "react";

const ChangePas = () => {
    const [email, setEmail] = useState("");
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    };
    return (
        <div className="auth">
            <h2>Смена пароля</h2>
            <form>
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
                <button type="submit" className="btn btn-primary">
                    Сменить
                </button>
            </form>
            <div className="d-flex justify-content-center mt-3">
                <Link className="btn btn-outline-dark btn-sm ms-3" to="/login">
                    Назад
                </Link>
            </div>
        </div>
    );
};

export default ChangePas;
