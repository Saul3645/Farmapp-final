import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { firebase } from '@firebase/app';
import '@firebase/firestore'
import 'firebase/storage';

class AddProduct extends React.Component {
    
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('Medicamentos');
        this.state = {
            Nombre: '',
            Descripcion: '',
            Desc_Corta: '',
            Precio: '',
            Url: '',
            Farmacia: '',
            image: null,
        }
    }
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
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
        const { image } = this.state;
        const uploadTask = firebase.storage().ref(`images/${image.name}`).put(this.state.image)
        uploadTask.on('state_changed', (snapshot) => { console.log('snapshot') },
            (error) => { console.log(error); },
            () => { firebase.storage().ref('images').child(image.name).getDownloadURL().then(Url => this.setState({ Url })) })
    }
    onSubmit = (e) => {
        e.preventDefault();
        
        const { Nombre, Desc_Corta, Descripcion, Precio, Farmacia } = this.state;
        
        this.ref.add({
            Nombre,
            Descripcion,
            Desc_Corta,
            Precio,
            Farmacia,
            Url: this.state.Url
        }).then((docRef) => {
            this.setState({
                Nombre: '',
                Descripcion: '',
                Desc_Corta: '',
                Precio: '',
                Url: '',
            });
            this.props.history.push("/list")
        })
        .catch((error)=>{
            console.error("Error adding document: ", error);
        });
    }
    render() {
        const { Nombre, Descripcion, Desc_Corta, Precio, Farmacia } = this.state;
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
        }
        return (
            
            <div>
                <Card style={cardStyles}>
                    <div className="Buttons">
                        <Link to="/list">
                            <button class="Edit-Button">Regresar</button>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <label className="label_" for="Nombre">Nombre del medicamento</label>
                            <input type="text" class="form-control" name="Nombre" value={Nombre} onChange={this.onChange} placeholder="Ingrese un nombre"></input>
                        </div>
                        <div>
                            <label className="label_" for="Descripcion">Descripcion</label>
                            <textarea class="form-control" name="Descripcion" value={Descripcion} onChange={this.onChange} placeholder="Ingrese una descripcion" cols="80" rows="3">{Descripcion}</textarea>
                        </div>
                        <div>
                            <label className="label_" for="Desc_Corta">Presentacion </label>
                            <input type="text" class="form-control" name="Desc_Corta" value={Desc_Corta} onChange={this.onChange} placeholder="Ingrese caracteristicas"></input>
                        </div>
                        <div>
                            <label className="label_" for="Precio">Precio </label>
                            <input type="number" class="form-control" name="Precio" value={Precio} onChange={this.onChange} placeholder="Ingrese caracteristicas"></input>
                        </div>
                        <div>
                            <label className="label_" for="Farmacia">Farmacia </label>
                            <input type="text" class="form-control" name="Farmacia" value={Farmacia} onChange={this.onChange} placeholder="Ingrese Farmacia"></input>
                        </div>
                    </div>
                    <div class="upload-btn-wrapper">
                        <button class="file-btn">Elige una imagen</button>
                        <input type="file" onChange={this.handleChange} />
                    </div>
                    <div className="upload-data">

                        <img src={this.state.Url} heigth="200" width="200" alt=""/>
                    </div>
                    <div className="Buttons">
                        <button class="Submit-Button" onClick={this.handleUpload}>Actualizar</button>
                        <button class="Submit-Button" onClick={this.onSubmit}>Guardar</button>

                    </div>
                </Card>

            </div>
            
            

        )
    }
}

export default AddProduct