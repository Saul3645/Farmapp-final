import React, {useRef, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import {Alert} from 'react-bootstrap';
import './InicioSesion.css';

export default function InicioSesion() {
   const emailRef = useRef();
   const passwordRef = useRef();
   const {log} = useAuth();
   const [error, setError ] = useState("");
   const [loading, setLoading ] = useState(false);
   const history = useHistory();

   async function handleSubmit(e){
      e.preventDefault()

      try{
         setError("")
         setLoading(true)
         await log(emailRef.current.value, passwordRef.current.value)
         history.push('/')
      }catch{
         setError('Fallo el inicio de sesion ')
      }

      setLoading(false)
   }

   return (
      <>
         <section className="containerlog">
            <section className="one">

               <h2 className="heading">
                  Inicia sesion
               </h2>
               <div className="a_alert">
                  {error && <Alert variant="danger">{error}</Alert>}
               </div>
               
               <form onSubmit={handleSubmit}>
                  <input id="email" className="login" type='email' ref={emailRef} placeholder="Introduce tu email" required></input><br />
                  <input id="password" className="loginp"  ref={passwordRef} type='password' placeholder="Introduce tu contraseña" required></input><br />

                  <button disabled={loading} className="btn" type="submit" role="button">
                     Iniciar Sesion 
                  </button><br />
                  <p className="a_reg">
                  <Link to="/olvidarpassword" className="a_reg_link">Olvidé mi contraseña</Link>
                  </p>
                  

                  <p  className="a_reg">
                     No tienes cuenta. <Link to="/registro" className="a_reg_link">Registrate</Link>
                  </p> 
                  
               </form>
            </section>

         </section>


      </>
   );
}
