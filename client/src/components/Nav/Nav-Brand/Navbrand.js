import "./NavBrand.css";
import { Link } from "react-router-dom";
import Logo from "../../../asset/img/logo.png";

const NavBrand = () => {
  return (
    <div href="#home" className="navbrand__container">
      <h1 className="navbrand">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: 100,
            }}
          ></img>
        </Link>
      </h1>
    </div>
  );
};

export default NavBrand;
