import { useState } from "react";
import "./LoginModal.scss";
import { Link } from "react-router-dom";
import showPasswordIcon from "../../assets/NavigationImages/showPassword_icon.png";

function LoginCard({ handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-modal">
      <h1 style={{ color: "#45413e" }}>Sign In</h1>
      <form>
        <div className="form-control" style={{ alignItems: "flex-start" }}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <div className="form-control-password">
            <label>Password</label>
            <Link to="/error404" onClick={handleClose}>
              forgot password
            </Link>
          </div>
          <div className="input-password">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern="^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,}$"
              required
              minLength={6}
            />
            <img
              src={showPasswordIcon}
              alt="Show Password Icon"
              style={{ width: 20 }}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>
        <button>Login</button>
      </form>

      <Link to="/error404" onClick={handleClose}>
        I don't have account
      </Link>
    </div>
  );
}

export default LoginCard;
