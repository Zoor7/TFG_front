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
import { IoStatsChartOutline, IoStatsChartSharp } from "react-icons/io5";

import { BiLogOut } from "react-icons/bi";

import Drawer from "@material-ui/core/Drawer";
import useWindowDimensions from "../../hooks/useWindowDimension";
import { NavLink, useHistory, useLocation } from "react-router-dom";

import "./header.scss";
import UserContext from "../../context/userContext/userContext";
import { cleanUserStorage } from "../../services/userStorage";
import { CLEAN_USER } from "../../context/reducers/userReducer";

const Header = () => {
  const [active, setActive] = useState();
  const [isClosed, setIsClosed] = useState(false);
  const [isLogged, setIsLogged] = useState();
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();
  const { userState, userDispatch } = useContext(UserContext);
  const history = useHistory();

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

  const handleLogout = () => {
    history.replace("/logout");
  };
  const handleCloseNav = () => {
    if (width <= 900) {
      setIsClosed(!isClosed);
    }
  };

  const header = () => {
    return (
      <div className="header-container">
        <NavLink
          onClick={() => {
            handleCloseNav();
          }}
          className={active === "/" ? "item item-active" : "item"}
          to={"/"}
          replace={goTo("/")}
        >
          {active === "/" ? (
            <AiFillHome size="1.3rem" />
          ) : (
            <AiOutlineHome size="1.3rem" />
          )}
          Inicio
        </NavLink>

        <NavLink
          onClick={() => {
            handleCloseNav();
          }}
          activeClassName="item-active"
          className="item"
          replace={goTo("/explorar")}
          to="/explorar"
        >
          <AiOutlineSearch size="1.3rem" />
          Explorar
        </NavLink>

        {!isLogged ? (
          <NavLink
            onClick={() => {
              handleCloseNav();
            }}
            activeClassName="item-active"
            className="item"
            replace={goTo("/login")}
            to="/login"
          >
            {active === "/login" ? (
              <RiUser3Fill size="1.3rem" />
            ) : (
              <RiUser3Line size="1.3rem" />
            )}
            Iniciar sesión
          </NavLink>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}
          >
            <hr style={{ width: "50%", alignSelf: "center" }}></hr>
            <NavLink
              onClick={() => {
                handleCloseNav();
              }}
              activeClassName="item-active"
              className="item"
              replace={goTo("/create")}
              to="/create"
            >
              <AiOutlinePlus size="1.3rem" />
              Crear
            </NavLink>

            <NavLink
              onClick={() => {
                handleCloseNav();
              }}
              activeClassName="item-active"
              className="item"
              replace={goTo("/stats")}
              to="/stats"
            >
              {active === "/stats" ? (
                <IoStatsChartSharp size="1.3rem" />
              ) : (
                <IoStatsChartOutline size="1.3rem" />
              )}
              Estadísticas
            </NavLink>

            <NavLink
              onClick={() => {
                handleCloseNav();
              }}
              activeClassName="item-active"
              className="item"
              replace={goTo("/favPlaces")}
              to="/favPlaces"
            >
              {active === "/favPlaces" ? (
                <BsHeartFill size="1.3rem" />
              ) : (
                <BsHeart size="1.3rem" />
              )}
              Lugares favoritos
            </NavLink>

            <span
              onClick={() => {
                handleCloseNav();
                handleLogout();
              }}
              className="item"
            >
              <BiLogOut size="1.3rem" />
              Logout
            </span>
          </div>
        )}
        {!isLogged ? (
          <hr style={{ width: "50%", alignSelf: "center" }}></hr>
        ) : null}
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
