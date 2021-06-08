import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventForm from "./views/NuevoEvento";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <p>Navbar</p>
        <Switch>
          <Route path="/eventos/new" exact>
            <EventForm />
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
