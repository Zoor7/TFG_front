import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext/userContext";

import { login } from "../../services/authService";
import { errorToast, successToast } from "../../components/toast/customToast";

import "./login.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userDispatch } = useContext(UserContext);

  const history = useHistory();

  const onSubmit = async (data) => {
    console.log(data);

    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const user = await login(userInfo);

    console.log(user[0]);
    if (user[0]) {
      successToast("Bienvenido bro");
      userDispatch({ type: "ADD_USER", payload: user[0] });
      history.replace("/");
      return;
    }

    errorToast("Email y/o contraseña incorrectos!");
  };

  const goToRegister = () => {
    history.push("/register");
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesion</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs-login">
          <input
            {...register("email", { required: true })}
            placeholder="Email..."
            type="email"
          />
          {errors?.email?.type === "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}

          <input
            {...register("password", { required: true })}
            placeholder="Contraseña..."
            type="password"
          />
          {errors?.password?.type === "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}

          <p>Olvidaste tu contraseña?</p>
        </div>
        <input value="Enviar" className="login-btn" type="submit" />
      </form>

      <div className="help-login">
        <p>No tienes cuenta?</p>
        <p className="login-toRegister" onClick={goToRegister}>
          Registrate
        </p>
      </div>
    </div>
  );
};

export default Login;
