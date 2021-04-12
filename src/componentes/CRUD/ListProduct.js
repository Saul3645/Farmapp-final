import React from 'react';
import { firebase } from '@firebase/app';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';
import '@firebase/firestore'
import 'firebase/storage';

class ListProduct extends React.Component {
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

    onCollectionUpdate = (querySnapshot) => {
        const medicamentos = [];
        querySnapshot.forEach((doc) => {
            const { Nombre, Desc_Corta, Descripcion, Precio, Url, Farmacia } = doc.data();
            medicamentos.push({
                key: doc.id,
                doc,
                Nombre,
                Desc_Corta,
                Descripcion,
                Precio,
                Url,
                Farmacia,
            });
        });
        this.setState({
            medicamentos
        });
    }
    delete(id) {


        var desertRef = firebase.storage().ref(this.state.medicamentos.Url);
        firebase.firestore().collection('Medicamentos').doc(id).delete().then(() => {
            console.log("Document is succesfuly deleted")
            this.props.history.push("/list")
        }).catch((error) => {
            console.log("Error is", error)
        });
        desertRef.delete().then(function () {
            console.log('file deleted')
        }).catch(function (error) {
            console.log('error while deleting the file')
        });
    }
    render() {
        const cardStyles = {
            width: 'auto',
            heigth: 'auto',
            backgroundColor: 'white',
            margin: 'auto',
            display: 'block',
            marginTop: '60px',
            marginBottom: '60px',
            paddingTop: '10px',
            paddingLeft: '20px',
            paddingRight: '20px',
            borderStyle: 'outset',
            borderLeft: '50px solid aqua',
            borderRadius: '20px'
        }
        return (
            <div>
                <Card style={cardStyles}>
                    <div className="Buttons">
                        <Link to="/create">
                            <Button variant='info' size='small'><i class="fas fa-plus" /> Medicamento</Button>
                        </Link>

                        <Link to="/createf">
                            <Button variant='info' size='small'><i class="fas fa-plus" /> Farmacia</Button>
                        </Link>

                    </div>
                    <br></br>
                    <div class="Buttons">
                        <div class="panel panel-heading ">
                            <h3 class="panel heading">Gestion de medicamentos</h3>
                        </div>
                    </div>
                    <div class="panel-body">
                        <table class="table table-stripe">
                            <thead>
                                <th>Nombre del medicamento</th>
                                <th>Descripcion</th>
                                <th>Caracteristicas</th>
                                <th>Precio</th>
                                <th>Imagen</th>
                                <th>Farmacia</th>
                                <th>Acciones</th>
                            </thead>
                            <tbody>
                                {this.state.medicamentos.map(medicamentos =>
                                    <tr>
                                        <td>{medicamentos.Nombre}</td>
                                        <td>{medicamentos.Descripcion}</td>
                                        <td>{medicamentos.Desc_Corta}</td>
                                        <td>{medicamentos.Precio}</td>
                                        <td><img src={medicamentos.Url} width="100px" height="100px" alt=""></img></td>
                                        <td>{medicamentos.Farmacia}</td>
                                        <td>
                                            <Link to={`/show/${medicamentos.key}`}><Button variant="info" ><i class="fas fa-eye" /></Button></Link>
                                        </td>

                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        )
    }
}
export default ListProduct