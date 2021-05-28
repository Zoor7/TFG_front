import { useContext, useEffect,useState } from "react";
import { useHistory } from "react-router";
import { successToast } from "../../components/toast/customToast";
import { CLEAN_USER } from "../../context/reducers/userReducer";
import UserContext from "../../context/userContext/userContext";
import { cleanUserStorage } from "../../services/userStorage";
import "./logout.scss";

const Logout = () => {
  const [username, setUsername] = useState()
  const history = useHistory();
  const { userState, userDispatch } = useContext(UserContext);

  useEffect(() => {
    setUsername(userState.username)
    successToast("Volviendo al Inicio", 3000);
    cleanUserStorage();
    userDispatch({ type: CLEAN_USER });
    setTimeout(() => {
      history.replace("/");
    }, 3000);
  }, []);
  return (
    <div className="logout-main">
      <div className="container logout-container">
        <h2>Nos vemos {username}</h2>
      </div>
    </div>
  );
};

export default Logout;
