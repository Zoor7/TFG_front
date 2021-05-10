import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { registeServ } from "../../services/authService";

import "./register.scss";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const onSubmit = async (data) => {
    console.log(data);

    const userInfo = {
      email: data.email,
      username: data.username,
      passwordHash: data.password,
    };

    const newUser = await registeServ(userInfo);

    if (newUser) {
      //CREAR ALERTA OK
      history.replace("/login");
      return;
    }

    //CREAR ERROR
  };

  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <div className="register-container">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs-register">
          <input
            {...register("email", { required: true })}
            placeholder="Email..."
            type="email"
          />
          {errors?.email?.type === "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}

          <input
            {...register("username", { required: true })}
            placeholder="Nombre de usuario..."
            type="text"
          />
          {errors?.username?.type === "required" && (
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
        </div>
        <input className="register-btn" type="submit" />
      </form>

      <div className="help-register">
        <p>Ya tienes cuenta?</p>
        <p className="register-toLogin" onClick={goToLogin}>
          Inicia Sesion
        </p>
      </div>
    </div>
  );
};

export default Register;
