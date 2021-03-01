import React from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import HomeState from './Context/Home/HomeState';
import LoginState from './Context/Login/LoginState'
import CreateState from './Context/Create/CreateState'
import ContactoState from './Context/Contacto/ContactoState'
import CarritoState from './Context/Carrito/CarritoState'
import CompraState from './Context/Compras/CompraState'
import Card from './Componentes/cards/card'
import Home from './Componentes/home/Home'
import Carrito from './Componentes/carrito/Home'
import Contacto from './Componentes/formularioContacto/FormularioContacto'
import Login from  './Componentes/login/Login'
import Create from './Componentes/create/Create'
import Admin from './Componentes/admin/Home'
import ModalSesion from './Componentes/modals/ModalConfirmacion'
import PersistentDrawerLeft from './Componentes/sideNav/NavBar';
import Mensaje from './Componentes/admin/Mensaje/Mensaje'
import Recovery from './Componentes/recoveryPassword/RecoveryPassword'
import Compras from './Componentes/admin/Compra/Compra'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {

  return (
    <LoginState>
    <CreateState>
      <HomeState>
        <CarritoState>
          <ContactoState>
            <CompraState>
            <HashRouter>
              <PersistentDrawerLeft />
                <Switch>
                  <Route exact={true} path='/' component={Home} />
                  <Route path='/login' component={Login}/>
                  <Route path='/card' component={Card} />
                  <Route path='/Contacto' component={Contacto} />
                  <Route path='/carrito' component={Carrito} />
                  <Route path='/create' component={Create} />
                  <Route path='/admin' component={Admin} />
                  <Route path='/logout' component={ModalSesion} />
                  <Route path='/mensaje' component={Mensaje} />
                  <Route path="/recovery" component={Recovery}/>
                  <Route path="/compras" component={Compras}/>
                </Switch>
            </HashRouter>
            </CompraState>
          </ContactoState>
        </CarritoState>
      </HomeState>
      </CreateState>
    </LoginState>
  );
}

export default App;
