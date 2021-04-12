import React, {useRef, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import './InicioSesion.css';

export default function UpdateProfile() {
   const emailRef = useRef();
   const passwordRef = useRef();
   const passwordConfirmRef = useRef();
   const {currentUser, updatePassword, updateEmail} = useAuth();
   const [error, setError ] = useState("");
   const [loading, setLoading ] = useState(false);
   const history = useHistory();

   function handleSubmit(e){
       
      e.preventDefault()

      if(passwordRef.current.value !== passwordConfirmRef.current.value ){
        return setError('Passwords do not match')
      }

      const promises = []
      setLoading(true)
      setError("")
      
      if (emailRef.current.value !== currentUser.email) {
          promises.push(updateEmail(emailRef.current.value))
      }
      if (passwordRef.current.value){
        promises.push(updatePassword(passwordRef.current.value))
      }

      Promise.all(promises).then(() => {
          history.push('/dashboard')
      }).catch(() => {
          setError('Failed to update account')
      }).finally(() => {
        setLoading(false)
      })
      
   }

   return (
      <>
         <section className="containerupdate">
            <section className="one">

               <h2 className="heading">
                  Actualizar Perfil
               </h2>
               {error && <alert severity="error">{error}</alert>}
               <form onSubmit={handleSubmit}>
                  <input id="email" className="login" type='email' ref={emailRef} required defaultValue={currentUser.email}></input><br />
                  <input id="password" className="loginp"  ref={passwordRef} type='password' placeholder="Nueva Contraseña"></input><br />
                  <input id="password confirm" className="loginp" ref={passwordConfirmRef} type='password' placeholder="Confirmar nueva contraseña"></input><br />
                  <button disabled={loading} className="btn" type="submit" >
                     Actualizar
                  </button><br />
                  <p className="a_reg">
                  <Link to="/" className="a_reg_link">Cancelar</Link>
                  </p>
                  

                  
                  
               </form>
            </section>

         </section>


      </>
   );
}
