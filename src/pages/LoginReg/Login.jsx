import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext/userContext";

import { login } from "../../services/authService";
import { errorToast, successToast } from "../../components/toast/customToast";

import "./auth.scss";
import { ADD_USER } from "../../context/reducers/userReducer";
import { saveUser } from "../../services/userStorage";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userDispatch } = useContext(UserContext);

  const history = useHistory();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const user = await login(userInfo);

    if (user) {
      await saveUser(data.email);
      await userDispatch({ type: ADD_USER, payload: user });
      successToast(`Bienvenido ${user.username}`);
      history.replace("/");
      return;
    }

    errorToast("Email y/o contraseña incorrectos!");
  };

  const goToRegister = () => {
    history.push("/register");
  };

  return (
    <div className="container auth-container">
      <div className=" auth-main">
        <h1>Iniciar Sesion</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs-auth">
            <input
              {...register("email", { required: true })}
              placeholder="Email..."
              type="email"
            />
            {errors?.email?.type === "required" && (
              <span style={{ color: "red" }}>
                Introduzca el campo, por favor.
              </span>
            )}

            <input
              {...register("password", { required: true })}
              placeholder="Contraseña..."
              type="password"
            />
            {errors?.password?.type === "required" && (
              <span style={{ color: "red" }}>
                Introduzca el campo, por favor.
              </span>
            )}

            <p>Olvidaste tu contraseña?</p>
          </div>
          <input value="Enviar" className="auth-btn" type="submit" />
        </form>

        <div className="help-auth">
          <p>No tienes cuenta?</p>
          <p className="auth-goTo" onClick={goToRegister}>
            Registrate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
