import React from 'react';
import Navbar from './componentes/Navbar'; 
import './App.css';
import Home from './componentes/paginas/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Farmacias from './componentes/paginas/Farmacias';
import Medicamentos from './componentes/paginas/Medicamentos';

import LogIn from './componentes/paginas/LogIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/farmacias' component={Farmacias} />
          <Route path='/medicamentos' component={Medicamentos} />
          <Route path='/log-in' component={LogIn} />          
        </Switch>
      </Router>
    </>
  );
}

export default App;
