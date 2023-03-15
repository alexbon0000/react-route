import { Link } from "react-router-dom";

const ChangePas = () => {
  return (
    <div className="changePas">
      <h1>Change Pas</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default ChangePas;
