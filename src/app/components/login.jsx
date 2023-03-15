import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <ul>
        <li>
          <Link to="/login/changePas">Change pas</Link>
        </li>
        <li>
          <Link to="/login/registration">Registration</Link>
        </li>
      </ul>
    </div>
  );
};

export default Login;
