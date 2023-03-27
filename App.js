import React from 'react';
import './App.css';

import { Provider } from "react-redux";
import { store } from "./store/store";

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Inicial from './componentes/Inicial';
import Ingresar from './componentes/Ingresar';
import Jugadores from './componentes/Jugadores';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import NoEncontrado from "./componentes/NoEncontrado";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/registrarse" component={Registro} />
          <Route path="/inicio" component={Inicial} />
          <Route path="/ingresar" component={Ingresar} />
          <Route path="/jugadores" component={Jugadores} />
          <Route component={NoEncontrado} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;