import { useForm } from "react-hook-form";


import './login.scss'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);


    
    return(
        <div className="login-container">
            <h1>Iniciar Sesion</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="inputs-login">
                <input {...register('email',{required:true})} placeholder='Email...' type="email" />
                {errors?.email?.type==='required' && <span style={{ color: 'red' }}>This field is required</span>}

                <input {...register('password',{required:true})} placeholder='Contraseña...' type="password" />
                {errors?.password?.type==='required' && <span style={{ color: 'red' }}>This field is required</span>}

                <p>Olvidaste tu contraseña?</p>
            </div>
            <input className='login-btn' type='submit'/>
            </form>

            <div className="help-login">
                <p>No tienes cuenta?</p>
                <p className='login-toRegister'>Registrate</p>
            </div>
        </div>
    )
    
}

export default Login