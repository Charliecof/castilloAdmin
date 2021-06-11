import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NuevoEvento from "./views/NuevoEvento";
import EditEvento from "./views/EditEvento";
import EditPaquetes from "./views/EditPaquetes";
import ShowEventos from "./views/ShowEventos";
import Navbar from "./Components/Navbar";
import NuevoPaquete from "./views/NuevoPaquete";
import ShowPaquetes from "./views/ShowPaquetes";
import EditCliente from "./views/EditCliente";
import NuevoAbono from "./views/NuevoAbono";
import Inicio from "./views/Inicio";
import ShowClientes from "./views/ShowClientes";
import Login from "./views/Login";
import Register from "./views/Register";
import EditUser from "./views/EditUsert";
import Ganancia from "./views/Ganancia";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="container">
          <Switch>
            <Route path="/login" exact>
              <Login></Login>
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/eventos" exact>
              <ShowEventos />
            </Route>
            <Route path="/eventos/edit/:id" exact>
              <EditEvento />
            </Route>
            <Route path="/eventos/new" exact>
              <NuevoEvento />
            </Route>

            <Route path="/paquetes" exact>
              <ShowPaquetes />
            </Route>
            <Route path="/paquetes/edit/:id" exact>
              <EditPaquetes />
            </Route>
            <Route path="/paquetes/new" exact>
              <NuevoPaquete />
            </Route>

            <Route path="/clientes" exact>
              <ShowClientes />
            </Route>
            <Route path="/clientes/edit/:id" exact>
              <EditCliente />
            </Route>

            <Route path="/abonos/new" exact>
              <NuevoAbono />
            </Route>

            <Route path="/usuario/edit">
              <EditUser />
            </Route>

            <Route path="/ganancias" exact>
              <Ganancia />
            </Route>

            <Route path="/" exact>
              <Inicio />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
