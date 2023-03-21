import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import ChangePas from "./components/changePas";
import User from "./components/user";
import NotFoundPage from "./components/notFoundPage";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/home";

function App() {
    return (
        <div className="box">
            <div className="header">
                <div className="app"></div>
                <NavBar />
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/changePas" element={<ChangePas />} />
                <Route path="/login/registration" element={<Registration />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
