import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { successToast } from "../../components/toast/customToast";
import { CLEAN_USER } from "../../context/reducers/userReducer";
import UserContext from "../../context/userContext/userContext";
import { cleanUserStorage } from "../../services/userStorage";
import "./logout.scss";

const Logout = () => {
  const history = useHistory();
  const { userState, userDispatch } = useContext(UserContext);

  useEffect(() => {
    successToast("Volviendo a Home", 3000);
    setTimeout(() => {
      cleanUserStorage();
      userDispatch({ type: CLEAN_USER });
      history.replace("/");
    }, 3000);
  }, []);
  return (
    <div className="logout-main">
      <div className="container logout-container">
        <h2>Nos vemos {userState.username}</h2>
      </div>
    </div>
  );
};

export default Logout;
