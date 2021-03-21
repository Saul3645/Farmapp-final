import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
      <div className='cards'>
        
        <h1>Farmacias</h1>
        
        
        <div className='cards__container'>
          <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
                src='images/img0.jpg'
                text='Farmacia Guadalajara'
                label='1.6 km'
                path='/farmacias'
              />
              <CardItem
                src='images/img0.jpg'
                text='Farmacia Guadalajara'
                label='1.6 km'
                path='/farmacias'
              />
              <CardItem
                src='images/img0.jpg'
                text='Farmacia Guadalajara'
                label='1.6 km'
                path='/farmacias'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src='images/img0.jpg'
                text='Farmacia...'
                label='1.6 km'
                path='/farmacias'
              />
              <CardItem
                src='images/img0.jpg'
                text='Farmacia Guadalajara'
                label='1.6 km'
                path='/farmacias'
              />
              <CardItem
                src='images/img0.jpg'
                text='Farmacia...'
                label='1.6 km'
                path='/farmacias'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img0.jpg'
                text='Farmacia...'
                label='1.6 km'
                path='/farmacias'
              />
              <CardItem
                src='images/img0.jpg'
                text='Farmacia...'
                label='1.6 km'
                path='/farmacias'
              />
              <CardItem
                src='images/img0.jpg'
                text='Farmacia...'
                label='1.6 km'
                path='/farmacias'
              />
            </ul>
          </div>
        </div>
        
      </div>
      
    );
  }
  
  export default Cards;