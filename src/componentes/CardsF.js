import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { firebase } from '@firebase/app';
import '@firebase/firestore'
import 'firebase/storage';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Sucursales");
    this.unsubscribe = null;
    this.state = {
      farmacias: []
    };
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }
  onCollectionUpdate = (querySnapshot) => {
    const farmacias = [];
    querySnapshot.forEach((doc) => {
      const { Nombre, Url } = doc.data();
      farmacias.push({
        key: doc.id,
        doc,
        Nombre,
        
        Url,
      });
    });
    this.setState({
      farmacias
    });
  }
  render() {
    return (
      <div className='cards'>

        <h1>Farmacias </h1>


        <div className='cards__container'>
          {this.state.farmacias.map(farmacia =>
            <div className='cards__wrapper'>


              <div className='cards__items'>
                <CardItem
                  src={farmacia.Url}
                  text={farmacia.Nombre}
                  label={farmacia.Nombre}
                  path={`/perfil/${farmacia.key}`}
                />

              </div>
          

          </div>
          )}
        </div>

      </div>

    )
  }
}

export default Cards;