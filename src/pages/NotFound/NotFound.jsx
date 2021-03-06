import { useHistory } from "react-router";
import notFound from "../../assets/images/notFound.webp";
import pulpNotFound from "../../assets/images/pulpNotFound.webp";
import useWindowDimensions from "../../hooks/useWindowDimension";

import "./notFound.scss";

const NotFound = () => {
  const { width } = useWindowDimensions();
  const history = useHistory();

  return (
    <div className="notfound-container a">
      <img src={width <= 900 ? pulpNotFound : notFound} alt="404" />
      <button onClick={() => history.replace("/")} className="notfound-btn">
        HOME
      </button>
    </div>
  );
};

export default NotFound;
