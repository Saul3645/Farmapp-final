import React from 'react';
import { firebase } from '@firebase/app';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';
import '@firebase/firestore'
import 'firebase/storage';

class ShowProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            medicamentos: [],
            key: ''
        }
    }
    componentDidMount() {
        
        const ref = firebase.firestore().collection('Medicamentos').doc(this.props.match.params.id);

        ref.get().then((doc) =>{
            if(doc.exists){
                this.setState({
                    medicamentos: doc.data(),
                    key: doc.id,
                    isLoading: false
                });

            }else{
                console.log("No se encontro ningun documento")
            }
        });
    }
    delete(id){
        
        
        var desertRef = firebase.storage().refFromURL(this.state.medicamentos.Url);
        firebase.firestore().collection('Medicamentos').doc(id).delete().then(()=>{
            console.log("Document is succesfuly deleted")
            this.props.history.push("/list")
        }).catch((error)=>{
            console.log("Error is", error)
        });
        desertRef.delete().then(function(){
            console.log('file deleted')
        }).catch(function(error){
            console.log('error while deleting the file')
        });
    }
    render() {
        const cardStyles = {
            width: '40rem',
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
                        <Link to="/list">
                            <button class="Edit-Button">Regresar</button>
                        </Link>
                    </div>

                    <div className="upload-data">

                        <img src={this.state.medicamentos.Url} heigth="200" width="200" />
                    </div>
                    <div class="container">
                        <div class="panel panel-default">
                            <h3 class="panel-title">{this.state.medicamentos.Nombre}</h3>
                        </div>
                        <div class="panel-body">
                            <dl>
                                <dl>Descripcion:</dl>
                                <dl>{this.state.medicamentos.Descripcion}</dl>
                            </dl>
                            <dl>
                                <dl>Caractaristicas:</dl>
                                <dl>{this.state.medicamentos.Desc_Corta}</dl>
                            </dl>
                            <dl>
                                <dl>Precio:</dl>
                                <dl>${this.state.medicamentos.Precio}</dl>
                            </dl>
                            <dl>
                                <dl>Farmacias:</dl>
                                <dl>{this.state.medicamentos.Farmacia}</dl>
                            </dl>
                            <td>
                                <Link to={`/edit/${this.state.key}`}>
                                    <Button variant="warning" >
                                        <i class="fas fa-edit" />
                                    </Button>
                                </Link>
                                <Button variant="danger" onClick={this.delete.bind(this, this.state.key)}>
                                    <i class="fas fa-trash" />
                                </Button>
                            </td>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
export default ShowProduct