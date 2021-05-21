import { useState, useEffect, useContext } from "react";

import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiUser3Fill, RiUser3Line } from "react-icons/ri";
import { IoStatsChartOutline, IoStatsChartSharp } from 'react-icons/io5';

import Drawer from "@material-ui/core/Drawer";
import useWindowDimensions from "../../hooks/useWindowDimension";
import { NavLink, useLocation } from "react-router-dom";

import "./header.scss";
import UserContext from "../../context/userContext/userContext";

const Header = () => {
  const [active, setActive] = useState();
  const [isClosed, setIsClosed] = useState(false);
  const [isLogged, setIsLogged] = useState();
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();
  const { userState } = useContext(UserContext);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  useEffect(() => {
    if (userState.username) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [userState]);

  const goTo = (url) => {
    if (url === pathname) {
      return true;
    }
    return false;
  };

  const header = () => {
    return (
      <div className="header-container">
        <NavLink
          onClick={width <= 900 ? () => setIsClosed(!isClosed) : () => ""}
          className={active === "/" ? "item item-active" : "item"}
          to={"/"}
          replace={goTo("/")}
        >
          {active === "/" ? (
            <AiFillHome size="1.8rem" />
          ) : (
            <AiOutlineHome size="1.8rem" />
          )}
          Home
        </NavLink>

        <NavLink
          onClick={width <= 900 ? () => setIsClosed(!isClosed) : () => ""}
          activeClassName="item-active"
          className="item"
          replace={goTo("/explorar")}
          to="/explorar"
        >
          <AiOutlineSearch size="1.8rem" />
          Explorar
        </NavLink>

        {!isLogged ? (
          <NavLink
            onClick={width <= 900 ? () => setIsClosed(!isClosed) : () => ""}
            activeClassName="item-active"
            className="item"
            replace={goTo("/login")}
            to="/login"
          >
            {active === "/login" ? (
              <RiUser3Fill size="1.8rem" />
            ) : (
              <RiUser3Line size="1.8rem" />
            )}
            Login
          </NavLink>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}
          >
            <NavLink
              onClick={width <= 900 ? () => setIsClosed(!isClosed) : () => ""}
              activeClassName="item-active"
              className="item"
              replace={goTo("/create")}
              to="/create"
            >
              <AiOutlinePlus size="1.8rem" />
              Create
            </NavLink>

            <NavLink
              onClick={width <= 900 ? () => setIsClosed(!isClosed) : () => ""}
              activeClassName="item-active"
              className="item"
              replace={goTo("/stats")}
              to="/stats"
            >
              {active === "/stats" ? (
                <IoStatsChartSharp size="1.8rem" />
              ) : (
                <IoStatsChartOutline size="1.8rem" />
              )}
              Stats
            </NavLink>
          </div>
        )}

        <hr style={{ width: "50%", alignSelf: "center" }}></hr>


        {isLogged &&
          <NavLink
            onClick={width <= 900 ? () => setIsClosed(!isClosed) : () => ""}
            activeClassName="item-active"
            className="item"
            replace={goTo("/favPlaces")}
            to="/favPlaces"
          >
            {active === "/favPlaces" ? (
              <BsHeartFill size="1.8rem" />
            ) : (
              <BsHeart size="1.8rem" />
            )}
              Lugares favoritos
            </NavLink>}
      </div>
    );
  };

  return (
    <div className="nose">
      {width >= 900 ? (
        header()
      ) : (
        <div className="mobile-header">
          <div>
            <p className="header-title">BCURIOUS</p>
            <GiHamburgerMenu
              size="1.3rem"
              onClick={() => setIsClosed(!isClosed)}
            />
          </div>
          <Drawer
            anchor={"left"}
            open={isClosed}
            onClose={() => setIsClosed(!isClosed)}
          >
            {header()}
          </Drawer>
        </div>
      )}
    </div>
  );
};

export default Header;
