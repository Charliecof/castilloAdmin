import React from "react";
import { useHistory } from "react-router";

export default function Inicio() {
  const history = useHistory();

  return (
    <div className="section">
      <div className="columns">
        <div className="column is-4">
          <button
            onClick={() => {
              history.push("/eventos/");
            }}
            className="button is-primary"
          >
            Eventos
          </button>
        </div>
        <div className="column is-4">
          <button
            onClick={() => {
              history.push("/abonos/new");
            }}
            className="button is-primary"
          >
            Abonos
          </button>
        </div>
        <div className="column is-4">
          <button
            onClick={() => {
              history.push("/paquetes/");
            }}
            className="button is-primary"
          >
            Paquetes
          </button>
        </div>
      </div>
    </div>
  );
}
