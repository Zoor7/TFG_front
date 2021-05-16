import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { errorToast, successToast } from "../../components/toast/customToast";
import AvatarUpload from "../../components/AvatarUpload/AvatarUpload";

import { registeServ } from "../../services/authService";

import "./auth.scss";

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
      successToast("Registro completado!", 3000);
      history.replace("/login");
      return;
    }
    errorToast("Email ya en uso");
    // return;
  };

  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <div className="auth-container container">
      <div className="auth-main">
        <h1>Registrarse</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs-auth">
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
          <div className="avatar-picker">

            <AvatarUpload center id="image" onInput={() => { }} />
          </div>

          <input className="auth-btn" type="submit" value="Regístrate" />
        </form>

        <div className="help-auth">
          <p>Ya tienes cuenta?</p>
          <p className="auth-goTo" onClick={goToLogin}>
            Inicia Sesion
        </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
