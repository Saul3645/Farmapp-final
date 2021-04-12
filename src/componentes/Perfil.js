import React from 'react';
import './Perfil.css';
import { firebase } from '@firebase/app';
import '@firebase/firestore'


class Perfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            farmacias: [],
            key: ''
        };

    }
    componentDidMount() {
        const ref = firebase.firestore().collection('Sucursales').doc(this.props.match.params.id);
        
        

        ref.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    farmacias: doc.data(),
                    key: doc.id,
                    isLoading: false
                });

            } else {
                console.log("No se encontro ningun documento")
            }
        });

    }
    render() {
        return (
            <>
                <div className='perfil'>
                    <img className='avatar' src={this.state.farmacias.Url} alt=""/>
                    <h1 className='user-name'>{this.state.farmacias.Nombre}</h1>
                </div>

                <div className='container__'>
                    <h1>
                        ACERCA DE
                    </h1>
                    <p>
                        {this.state.farmacias.Descripcion}
                    </p>
                </div>

                <ul className='botones'>
                    <li>
                        <button className="btn" >
                            Ubicación
                        </button>
                    </li>
                    <li>
                        <button className="btn">
                            Mensaje
                        </button>
                    </li>


                </ul>
                
            </>
        );
    }
}
export default Perfil;