import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LOGO_URL from "../imagess/raushanLogo.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Header = () => {
  const [Loginbutton, setLoginbutton] = useState("Login");
  return (
    <div className="Header">
      <div className="logo-container" >
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} /> Cart
          </li>
          <button
            className="login"
            onClick={() => {
              Loginbutton==='Login'
                ? setLoginbutton("Logout")
                : setLoginbutton("Login");
            }}
          >{Loginbutton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
