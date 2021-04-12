import React from 'react';
import { firebase } from '@firebase/app';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';
import '@firebase/firestore'
import 'firebase/storage';

class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            Nombre: '',
            Descripcion: '',
            Desc_Corta: '',
            Url: '',
            Precio: '',
            Farmacia: '',
            image: null

        }
    }
    componentDidMount() {

        const ref = firebase.firestore().collection('Medicamentos').doc(this.props.match.params.id);

        ref.get().then((doc) => {
            if (doc.exists) {
                const document = doc.data();
                this.setState({
                    key: doc.id,
                    Nombre: document.Nombre,
                    Descripcion: document.Descripcion,
                    Desc_Corta: document.Desc_Corta,
                    Url: document.Url,
                    Precio: document.Precio,
                    Farmacia: document.Farmacia,

                });

            } else {
                console.log("No se encontro ningun documento")
            }
        });
    }
    handleChange = (e) => {
        if (e.target.files[0]) {
            this.setState({
                image: e.target.files[0]
            })
        }
        console.log(e.target.files[0]);
    }
    handleUpload = () => {
        const { image, Url } = this.state;
        var desertRef = firebase.storage().refFromURL(Url);
        const uploadTask = firebase.storage().ref(`images/${image.name}`).put(this.state.image)
        uploadTask.on('state_changed', (snapshot) => { console.log('snapshot') },
            (error) => { console.log(error); },
            () => { firebase.storage().ref('images').child(image.name).getDownloadURL().then(Url => this.setState({ Url })) })

        desertRef.delete().then(function () {
            console.log('file deleted')
        }).catch(function (error) {
            console.log('error while deleting the file')
        });
    }
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ document: state })
    }
    onSubmit = (e) => {
        e.preventDefault();

        const { Nombre, Desc_Corta, Descripcion, Precio, Farmacia, Url } = this.state;
        const updateRef = firebase.firestore().collection('Medicamentos').doc(this.state.key);
        updateRef.set({
            Nombre,
            Descripcion,
            Desc_Corta,
            Precio,
            Farmacia,
            Url
        }).then((docRef) => {
            this.setState({
                key: '',
                Nombre: '',
                Descripcion: '',
                Desc_Corta: '',
                Precio: '',
                Url: '',
            });
            this.props.history.push("/show/" + this.props.match.params.id)
        })
            .catch((error) => {
                console.error("Error editing document: ", error);
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

                        <img src={this.state.Url} heigth="200" width="200" alt=""/>
                    </div>
                    <div class="upload-btn-wrapper">
                        <button class="file-btn">Elige una imagen</button>
                        <input type="file" onChange={this.handleChange} />
                    </div>
                    <div className="Buttons">
                        <button class="Submit-Button" onClick={this.handleUpload}>Actualizar</button>

                    </div>
                    <div class="container">
                        <div class="panel panel-default">


                            <div class="panel-body">
                                <form onSubmit={this.onSubmit}>
                                    <div>
                                        <div>
                                            <label className="label_" for="Nombre">Nombre del medicamento</label>
                                            <input type="text" class="form-control" name="Nombre" value={this.state.Nombre} onChange={this.onChange} placeholder="Ingrese un nombre"></input>
                                        </div>
                                        <div>
                                            <label className="label_" for="Descripcion">Descripcion</label>
                                            <textarea class="form-control" name="Descripcion" value={this.state.Descripcion} onChange={this.onChange} placeholder="Ingrese una descripcion" cols="80" rows="3">{this.Descripcion}</textarea>
                                        </div>
                                        <div>
                                            <label className="label_" for="Desc_Corta">Presentacion </label>
                                            <input type="text" class="form-control" name="Desc_Corta" value={this.state.Desc_Corta} onChange={this.onChange} placeholder="Ingrese caracteristicas"></input>
                                        </div>
                                        <div>
                                            <label className="label_" for="Precio">Precio </label>
                                            <input type="number" class="form-control" name="Precio" value={this.state.Precio} onChange={this.onChange} placeholder="Ingrese caracteristicas"></input>
                                        </div>
                                        <div>
                                            <label className="label_" for="Farmacia">Farmacia </label>
                                            <input type="text" class="form-control" name="Farmacia" value={this.state.Farmacia} onChange={this.onChange} placeholder="Ingrese Farmacia"></input>
                                        </div>
                                        <div className="Buttons">
                                            <Button type="submit" variant="success" >Guardar</Button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
export default EditProduct