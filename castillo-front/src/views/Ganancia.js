import React, { useState } from "react";
import axiosH from "../helpers/axiosHelp";

export default function Ganancia() {
  const [formData, setForm] = useState({});

  const [gananciaT, setGanancia] = useState(0);

  const actualizar = (event) => {
    setForm({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const calcular = () => {
    axiosH
      .post("/ganancia", formData)
      .then((result) => {
        console.log(result);
        setGanancia(result.data.total_count);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="section">
      <h1 className="title">Ganancias</h1>
      <div className="columns">
        <div className="column">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Fecha de Inicio</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    onChange={actualizar}
                    className="input"
                    name="fechaI"
                    type="date"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Fecha Final</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    onChange={actualizar}
                    className="input"
                    name="fechaF"
                    type="date"
                  />
                </p>
              </div>
            </div>
          </div>

          <p>Ganancia: ${gananciaT}</p>
          <div className="has-text-right mt-5">
            <button onClick={calcular} className="button is-primary">
              Calcular
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
