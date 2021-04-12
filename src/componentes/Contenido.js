import React from 'react';
import './Contenido.css';


function Contenido() {
  return (
    <>
      <div className='container__'>
        <h1>
          ¿Quienes somos?
        </h1>
        <br></br>

        <p>
          Farmapp es un motor de búsqueda de productos y cubre la mayoría de las farmacias online del mercado.
        </p>
        <p>
          ¿Qué supermercados y farmacias  se comparan en Farmapp ?
        </p>
        <p>
          <li>
            Farmacias Walmart
          </li>
        </p>
        <p>
          <li>
            Farmacias en Rappi
          </li>
        </p>
        <p>
          <li>
            Farmacias en Cornershop
          </li>
        </p>
        <p>
          <li>
            Farmacias Guadalajara
          </li>

        </p>
        <p>
          <li>
            Farmacias Benavides
          </li>
        </p>
        <p>
          <li>
            Farmatodo
          </li>
        </p>
      </div>

      <section class="container_">
        <section class="one">
          <div class="logo">
            <img src="https://image.flaticon.com/icons/svg/143/143361.svg"></img>
          </div>
          <h2 class="heading">
            Suscribete para obtener mas promociones
  </h2>
          <p> Introduce tu email
  </p>
          <form>
            <input className="suscribete" type='text' placeholder="introduce tu email"></input><br />
            <button class="btn" role="button">
              Subscribete
            </button>
          </form>
        </section>
        <section class="two">
          <h3>
            Gracias por suscribirse  !
    </h3>
          <div class="close">
          </div>
        </section>
      </section>


    </>
  );
}
export default Contenido;