import React, {useRef, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';

import {Alert} from 'react-bootstrap';
import './InicioSesion.css';

export default function RegistroSesion() {
   const emailRef = useRef();
   const passwordRef = useRef();
   const passwordConfirmRef = useRef();
   const {signup} = useAuth();
   const [error, setError ] = useState("");
   const [loading, setLoading ] = useState(false);
   const history = useHistory()
   

   async function handleSubmit(e){
      e.preventDefault()

      if(passwordRef.current.value !== passwordConfirmRef.current.value ){
         return setError('Las contraseñas no coinciden')
      }

      try{
         setError("")
         setLoading(true)
         await signup(emailRef.current.value, passwordRef.current.value)
         history.push('/')
      }catch{
         setError('Fallo al crear la cuenta')
      }

      setLoading(false)
   }
   
   return (
      <>
         <section className="containerreg">
            <section className="one">

               <h2 className="heading">
                  Registrate
               </h2>
               
               <div className="a_alert"> 
               {error && <Alert variant="danger"  >{error}</Alert>}
               </div> 
               <form onSubmit={handleSubmit}>
                  <input id="email" className="login" type='email' ref={emailRef} placeholder="Introduce tu email" required></input><br />
                  <input id="password" className="loginp"  ref={passwordRef} type='password' placeholder="Introduce tu contraseña" required></input><br />
                  <input id="password confirm" className="loginp" ref={passwordConfirmRef} type='password' placeholder="Confirma tu contraseña" required></input><br />

                  <button disabled={loading} className="btn" type="submit" role="button">
                     Registrarse
                  </button><br />
                  <p  className="a_reg">
                     ¿Ya tienes cuenta? <Link to="/log-in" className="a_reg_link">Ingresa</Link>
                  </p>  
                  
               </form>
            </section>

         </section>


      </>
   );
   
}
