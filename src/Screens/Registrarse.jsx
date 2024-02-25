import React from 'react';
import { useForm } from 'react-hook-form';


function Registrarse() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = data => {
        console.log(data);
        // Enviar los datos a un servidor
    };
  
    return (
        <div className="container mt-5 w-50 p-3">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              {...register('email', { required: 'Este campo es requerido', pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
          
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              {...register('password', { required: 'Este campo es requerido' })}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>
          
          <button type="submit" className="btn btn-primary mb-3">Crear Cuenta</button>
        </form>
        
        <div>
          <button className="btn btn-success mb-3 w-100">Registrarse con Google</button>
          <button className="btn btn-info mb-3 w-100">Registrarse con Facebook</button>
          <button className="btn btn-dark mb-3 w-100">Registrarse con Apple</button>
        </div>
      </div>
    );
};

export default Registrarse