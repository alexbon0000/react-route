import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isLoggedIn } from "../../session";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div>
            <p>Hello</p>
        </div>
    );
};

export default Home;
