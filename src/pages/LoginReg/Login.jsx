import './login.scss'

const Login = () => {
    
    return(
        <div className="login-container">
            <h1>Iniciar Sesion</h1>

            <div className="inputs-login">
                <input placeholder='Email...' type="text" />
                <input placeholder='Contraseña...' type="password" />
                <p>Olvidaste tu contraseña?</p>
            </div>
            <button>Enviar</button>

            <div className="help-login">
                <p>No tienes cuenta?</p>
                <p className='login-toRegister'>Registrate</p>
            </div>
        </div>
    )
    
}

export default Login