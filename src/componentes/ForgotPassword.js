import React, {useRef, useState} from 'react';
import { Link} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import {Alert} from 'react-bootstrap';
import './InicioSesion.css';

export default function ForgotPassword() {
   const emailRef = useRef();
   const {resetPassword} = useAuth();
   const [error, setError ] = useState("");
   const [message, setMessage] = useState("");
   const [loading, setLoading ] = useState(false);

   async function handleSubmit(e){
      e.preventDefault()

      try{
         setError("")
         setLoading(true)
         await resetPassword(emailRef.current.value)
         setMessage('Check your inbox for futher instruccions')
      }catch{
         setError('Failed to reset password')
      }

      setLoading(false)
   }

   return (
      <>
         <section className="containerlog">
            <section className="one">

               <h2 className="heading">
                   Cambio de contraseña
               </h2>
               <div className="a_alert">
                  {error && <Alert variant="danger">{error}</Alert>}
                  {message && <Alert variant="warning">{message}</Alert>}
               </div>
               
               <form onSubmit={handleSubmit}>
                  <input id="email" className="login" type='email' ref={emailRef} placeholder="Introduce tu email" required></input><br />

                  <button disabled={loading} className="btn" type="submit" >
                     Cambiar Contraseña
                  </button><br />
                  <p className="a_reg">
                  <Link to="/log-in" className="a_reg_link">Log in</Link>
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