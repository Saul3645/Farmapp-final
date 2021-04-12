import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Perfil.css';
import './InicioSesion.css';
import { Link, useHistory } from 'react-router-dom';

export default function DashboardPerfil() {

    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError('')

        try{
            await logout()
            history.push('/log-in')
        }catch{
            setError("Failed to log out")
        }
    }

    return (
        <>
            <div className='perfil'>
                <img className='avatar' src='https://ubicalas.com/v2/image.php?image=/uploads/3cb546195f28f6f2801d2c9bf608cdfa.png'></img>
                <h1 className='user-name'>Perfil</h1>
            </div>
            <section className="containerperfil">
                <section className="onep">
                    <h2 className="heading">
                        TU INFORMACIÓN
               </h2><br></br>
                    {error && <alert severity="error">{error}</alert>}
                    Email: {currentUser.email}

                    <Link to="/update-profile" >
                        <button className="btn">
                            Update
                            </button>
                    </Link>


                    
                    <button onClick={handleLogout} className="btn" role="button">
                        Log out
                    </button>
                    



                </section>

            </section>

        </>
    )
}
