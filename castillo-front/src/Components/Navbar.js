import React from "react";
import logo from "../logo.png";
export default function Navbar() {
  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} style={{ width: "50px" }} />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            {" "}
            Inicio
          </a>

          <a className="navbar-item" href="/eventos">
            Eventos
          </a>

          <a className="navbar-item" href="/paquetes">
            Paquetes
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
