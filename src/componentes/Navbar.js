import React, { useState} from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  

  

  return (
    <>
      <nav className='navbar_'>
        <div className='navbar-container_'>
          <Link to='/' className='navbar-logo_' onClick={closeMobileMenu}>
            FARMAPP
            <i class='fas fa-capsules' />
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu_ active' : 'nav-menu_'}>
            <li className='nav-item_'>
              <Link to='/' className='nav-links_' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item_'>
              <Link
                to='/farmacias'
                className='nav-links_'
                onClick={closeMobileMenu}
              >
                Farmacias
              </Link>
            </li>
            <li className='nav-item_'>
              <Link
                to='/medicamentos'
                className='nav-links_'
                onClick={closeMobileMenu}
              >
                Medicamentos
              </Link>
            </li>
            <li className='nav-item_'>
              <Link
                to='/dashboard'
                className='nav-links_'
                onClick={closeMobileMenu}
              >
                Perfil
              </Link>
            </li>
            <form className="form_buscador" autocomplete="off">
              <div className='navbar-logo-1_'>
                <input className="buscador" type="text" name="q" placeholder="Buscar"></input>
                <i class="fas fa-search" ></i>
              </div>
            </form>
            
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
