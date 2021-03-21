import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FARMAPP
            <i class='fas fa-capsules' />
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/farmacias'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Farmacias
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/medicamentos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Medicamentos
              </Link>
            </li>
            <form className="form_buscador" autocomplete="off">
              <div className='navbar-logo-1'>
                <input className="buscador" type="text" name="q" placeholder="Buscar"></input>
                <i class="fas fa-search" ></i>
              </div>
            </form>
            <li>
              <Link
                to='/log-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Iniciar Sesión
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Iniciar Sesión</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
