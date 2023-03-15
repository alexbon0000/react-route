import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import ChangePas from "./components/changePas";
import Home from "./components/home";

function App() {
  return (
    <div>
      <div className="header">
        <div className="app">
          <h1>App</h1>
        </div>
        <NavBar />
      </div>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/login/changePas" Component={ChangePas} />
        <Route path="/login/registration" Component={Registration} />
      </Routes>
    </div>
  );
}

export default App;
