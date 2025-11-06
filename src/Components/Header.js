import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between bg-green-200 shadow-lg m-2">
      <div className="logo-card">
        <img className="w-26" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li>Online: ✅</li>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
