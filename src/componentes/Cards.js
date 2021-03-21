import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>

      <h1>Categorias</h1>


      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img0.jpg'
              text='Reducen los efectos de la inflamación'
              label='Antinflamatorios'
              path='/medicamentos'
            />
            <CardItem
              src='images/img0.jpg'
              text='Reducen los efectos de la inflamación'
              label='Antinflamatorios'
              path='/medicamentos'
            />
            <CardItem
              src='images/img0.jpg'
              text='Reducen la tos no productiva'
              label='Antitusivos'
              path='/medicamentos'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img0.jpg'
              text='Reducen los efectos de la inflamación'
              label='Antinflamatorios'
              path='/medicamentos'
            />
            <CardItem
              src='images/img0.jpg'
              text='Reducen los efectos de la inflamación'
              label='Antinflamatorios'
              path='/medicamentos'
            />
            <CardItem
              src='images/img0.jpg'
              text='Reducen la tos no productiva'
              label='Antitusivos'
              path='/medicamentos'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img0.jpg'
              text='Alivian el dolor físico'
              label='Analgésicos'
              path='/medicamentos'
            />
            <CardItem
              src='images/img0.jpg'
              text='Combaten los efectos negativos de las reacciones alérgicas'
              label='Antialérgicos'
              path='/medicamentos'
            />
            <CardItem
              src='images/img0.jpg'
              text='Hacen frente a infecciones'
              label='Antinfecciosos'
              path='/medicamentos'
            />
          </ul>
        </div>
      </div>

    </div>

  );
}

export default Cards;
