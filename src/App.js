import React from 'react';
import Navbar from './componentes/Navbar';
import './App.css';
import Home from './componentes/views/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Farmacias from './componentes/views/Farmacias';
import Medicamentos from './componentes/views/Medicamentos';
import Perfil from './componentes/Perfil';
import LogIn from './componentes/views/LogIn';
import Registro from './componentes/views/Registro';
import DetalleP from './componentes/DetallesP';
import AuthProvider from './contexts/AuthContext'
import Dashboard from './componentes/views/Dashboard';
import Footer from './componentes/Footer';
import ForgotPassword from './componentes/views/ForgotPassword';
import Actualizar from './componentes/views/Actualizar';
import PrivateRoute from './PrivateRoute';
import AddProduct from './componentes/views/AddProduct';
import EditProduct from './componentes/CRUD/EditProduct';
import ListProduct from './componentes/CRUD/ListProduct'
import ShowProduct from './componentes/CRUD/ShowProduct';
import ScrollToTop from './componentes/ScrollToTop';
import AddPlace from './componentes/CRUD/AddPlace';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <AuthProvider>
          <Switch>
            <PrivateRoute path='/' exact component={Home} />
            <PrivateRoute path='/farmacias' component={Farmacias} />
            <PrivateRoute path='/medicamentos' component={Medicamentos} />
            <PrivateRoute path='/update-profile' component={Actualizar} />
            <Route path='/log-in' exact component={LogIn} />
            <Route path='/registro' exact component={Registro} />
            <Route path='/olvidarpassword' exact component={ForgotPassword} />
            <PrivateRoute path='/perfil/:id' component={Perfil} />
            <PrivateRoute path='/detalle/:id' component={DetalleP} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path='/create' component={AddProduct} />
            <Route path='/createf' component={AddPlace} />
            <Route path='/edit/:id' component={EditProduct} />
            <Route path='/show/:id' component={ShowProduct} />
            <Route path='/list' component={ListProduct}/>
            
          </Switch>
        </AuthProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
