import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="registration">
      <h1>Posts</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Registration;
