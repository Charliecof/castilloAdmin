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
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="container">
          <Switch>
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

            <Route path="/clientes/edit/:id">
              <EditCliente />
            </Route>

            <Route path="/info" exact>
              Pagina Info
            </Route>
            <Route path="/">
              <p>Error</p>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
