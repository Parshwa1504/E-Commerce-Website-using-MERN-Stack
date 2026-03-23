import "./Control.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Cart from "../../Card/Cart/Cart";
import { useContext, useState } from "react";
import { WishItemsContext } from "../../../Context/WishItemsContext";

const Control = () => {
  const wishItems = useContext(WishItemsContext);
  const [darkMode, setDarkMode] = useState(0);

  return (
    <div className="control__bar__container">
      <div className="controls__container">
        <div className="control">
          <Link to="/account/login">
            <PersonOutlineIcon
              color="black"
              size="large"
              sx={{ width: "35px" }}
            />
          </Link>
        </div>
        <div className="control">
          <Link to="/wishlist">
            <Badge badgeContent={wishItems.items.length} color="error">
              <FavoriteBorderIcon color="black" sx={{ width: "35px" }} />
            </Badge>
          </Link>
        </div>
        <div className="control">
          <Cart />
        </div>
        <div className="control">
          <button
            style={{
              border: 0,
            }}
            onClick={() => {
              const allelements = document.querySelectorAll("*");

              if (darkMode) {
                setDarkMode(0);
                allelements.forEach((element) => {
                  element.style.backgroundColor = "#000";
                  element.style.color = "white";
                });
              } else {
                setDarkMode(1);
                allelements.forEach((element) => {
                  element.style.cssText = "";
                });
              }
            }}
          >
            <DarkModeIcon color="white" size="large" sx={{ width: "35px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Control;
