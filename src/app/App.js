import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import ChangePas from "./components/changePas";
import User from "./components/user";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
    return (
        <div className="box">
            <div className="header">
                <div className="app"></div>
                <NavBar />
            </div>

            <Routes>
                <Route path="/user" Component={User} />
                <Route path="/login" Component={Login} />
                <Route path="/login/changePas" Component={ChangePas} />
                <Route path="/login/registration" Component={Registration} />
            </Routes>
        </div>
    );
}

export default App;
