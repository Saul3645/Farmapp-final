import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { firebase } from '@firebase/app';
import '@firebase/firestore'
import 'firebase/storage';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Medicamentos");
    this.unsubscribe = null;
    this.state = {
      medicamentos: []
    };
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }
  onCollectionUpdate = (querySnapshot) => {
    const medicamentos = [];
    querySnapshot.forEach((doc) => {
      const { Nombre, Desc_Corta, Url } = doc.data();
      medicamentos.push({
        key: doc.id,
        doc,
        Nombre,
        Desc_Corta,
        Url,
      });
    });
    this.setState({
      medicamentos
    });
  }
  render() {
    return (
      <div className='cards'>

        <h1>Medicamentos disponibles</h1>


        <div className='cards__container'>
          {this.state.medicamentos.map(medicamento =>
            <div className='cards__wrapper'>


              <div className='cards__items'>
                <CardItem
                  src={medicamento.Url}
                  text={medicamento.Desc_Corta}
                  label={medicamento.Nombre}
                  path={`/detalle/${medicamento.key}`}
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
