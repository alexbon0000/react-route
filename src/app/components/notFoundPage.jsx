import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <div className="notFound position-absolute top-50 start-50 translate-middle">
                <span>
                    <h1> Такой страницы нет </h1>
                </span>
                <span>
                    <Link
                        className=" btn btn-outline-dark btn-lg ms-3"
                        to="/login"
                    >
                        Назад
                    </Link>
                </span>
            </div>
        </>
    );
};

export default NotFoundPage;
