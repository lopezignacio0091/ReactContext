import React from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import HomeState from './Context/Home/HomeState';
import LoginState from './Context/Login/LoginState'
import CreateState from './Context/Create/CreateState'
import ContactoState from './Context/Contacto/ContactoState'
import CarritoState from './Context/Carrito/CarritoState'
import Card from './Componentes/cards/card'
import Home from './Componentes/home/Home'
import Carrito from './Componentes/carrito/Home'
import Contacto from './Componentes/formularioContacto/FormularioContacto'
import Login from  './Componentes/login/Login'
import Create from './Componentes/create/Create'
import PersistentDrawerLeft from './Componentes/sideNav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {

  return (
    <LoginState>
      <CreateState>
      <HomeState>
        <CarritoState>
          <ContactoState>
            <HashRouter>
              <PersistentDrawerLeft />
              <div className='container pt-3 mt-3 bg-light'>
                <Switch>
                  <Route exact={true} path='/' component={Home} />
                  <Route path='/login' component={Login}/>
                  <Route path='/card' component={Card} />
                  <Route path='/Contacto' component={Contacto} />
                  <Route path='/carrito' component={Carrito} />
                  <Route path='/create' component={Create} />
                </Switch>
              </div>
            </HashRouter>
          </ContactoState>
        </CarritoState>
      </HomeState>
      </CreateState>
    </LoginState>
  );
}

export default App;
