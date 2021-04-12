import React from 'react'
import './DetallesP.css'
import { Link } from 'react-router-dom';
import { firebase } from '@firebase/app';
import { Col, Button } from 'react-bootstrap'
import '@firebase/firestore'

class DetallesP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            medicamentos: [],
            key: ''
        };
        
    }
    
    componentDidMount() {
        const ref = firebase.firestore().collection('Medicamentos').doc(this.props.match.params.id);

        ref.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    medicamentos: doc.data(),
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
                <Link to="/medicamentos"><Button variant="warning" className="back"><i class="fas fa-arrow-left"></i></Button></Link>
                <div class="principal">
                    <div class="row">
                        <Col md={5}>
                            <div class="contenedor">
                                <br />
                                <h1 class="titulo-producto">{this.state.medicamentos.Nombre}</h1>
                                <br></br>
                                <div class="contenedorimg">
                                    <img src={this.state.medicamentos.Url} alt="" width="400px"></img>
                                </div>
                                <br />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div class="contenedor">
                                <h1 class="nombre">{this.state.medicamentos.Nombre}</h1>
                                <br></br>
                                <h4 class="subtitulo">{this.state.medicamentos.Desc_Corta}</h4>
                                <br></br>
                                <h2>Comparado en 2 Tiendas.</h2>
                                <h4 class="precio"><i class="fas fa-dollar-sign">{this.state.medicamentos.Precio}</i></h4>



                                <br></br>
                                <br></br>
                                <br></br>
                                <div>
                                    <p class="avisoP">* Los precios pueden variar respecto al tiempo de promocion o descuento del producto, pueden variar en el establecimiento físico. FarmApp no comercializa los productos de su página de manera directa sino a través de sus comercios afiliados.</p>
                                </div>
                                <br />
                                <br></br>
                            </div>
                        </Col>
                    </div>

                    {/* <div>
                <div class="relevantes">
                    <h3>Comparado en las siguientes Farmacias:</h3>
                    <div class="farmacias">
                        <h2>Farmacia IZZA</h2>
                    </div>
                    <div class="farmacias">
                        <h2>Farmacia Similares</h2>
                    </div>
                </div>
            </div> */}
                </div >
            </>
        )
    }
}

export default DetallesP
