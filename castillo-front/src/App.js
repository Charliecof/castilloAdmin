import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NuevoEvento from "./views/NuevoEvento";
import EditEvento from "./views/EditEvento";
import ShowEventos from "./views/ShowEventos";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <p>Navbar</p>
        <Switch>
          <Route path="/eventos" exact>
            <ShowEventos />
          </Route>
          <Route path="/" exact>
            <Link to="/eventos/edit/2">Hola</Link>
          </Route>
          <Route path="/eventos/new" exact>
            <NuevoEvento />
          </Route>
          <Route path="/eventos/edit/:id" exact>
            <EditEvento />
          </Route>
          <Route path="/info" exact>
            Pagina Info
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
