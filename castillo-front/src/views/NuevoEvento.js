import React, { useState } from "react";
import AddCliente from "../Components/AddCliente";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

export default function NuevoEvento() {
  const [cliente, setCliente] = useState(0);

  const [formData, setData] = useState({});

  const actualizar = (event) => {
    setData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const buscarCliente = (event) => {
    console.log(event.target.value);
    axios
      .get("http://localhost:8000/clientes/where?telefono=" + formData.telefono)
      .then((result) => {
        console.log(result.data);
        if (result.data[0]) {
          setCliente(result.data[0].id);
        } else {
          setCliente(-1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProp = (event) => {
    console.log(event.target.props);
  };

  return (
    <div className="section">
      <h1 className="title">Nuevo Evento</h1>
      <div className="columns">
        <div className="column">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Fecha</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    onChange={actualizar}
                    class="input"
                    name="fecha"
                    type="date"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Celebracion</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    onChange={actualizar}
                    class="input"
                    name="celebracion"
                    type="text"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Celebracion</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <div className="select">
                    <select onChange={actualizar} name="paquete">
                      <option value="1">Aventura</option>
                      <option value="2">Fiesta</option>
                    </select>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Adultos</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    onChange={actualizar}
                    class="input"
                    name="adultos"
                    type="adultos"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Ninios</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    onChange={actualizar}
                    class="input"
                    name="ninios"
                    type="number "
                  />
                </p>
              </div>
            </div>
          </div>
          <hr />

          <h4 className="title">Buscar Cliente</h4>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Telefono Cliente</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    onChange={actualizar}
                    class="input"
                    name="telefono"
                    type="text"
                  />
                  <button className="button" onClick={buscarCliente}>
                    Buscar
                  </button>
                </p>
              </div>
            </div>
          </div>

          {cliente == -1 && <AddCliente finished={true} />}
        </div>
      </div>
    </div>
  );
}
