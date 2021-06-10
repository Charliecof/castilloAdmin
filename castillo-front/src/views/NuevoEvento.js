import React, { useState } from "react";
import AddCliente from "../Components/AddCliente";
import axios from "axios";
import axiosH from "../helpers/axiosHelp";

import "bootstrap/dist/css/bootstrap.min.css";

export default function NuevoEvento() {
  const [cliente, setCliente] = useState(0);
  const [telefono, setTelefono] = useState(0);
  const [formData, setData] = useState({
    total: 7900,
    pagado: false,
    hora: 0,
    fecha: "",
    idcliente: "",
    celebracion: "",
    idpaquete: "",
    adultos: 0,
    ninios: 0,
    idpaquete: 0,
  });

  //functions
  const actualizar = (event) => {
    if (
      event.target.name == "ninios" ||
      event.target.name == "adultos" ||
      event.target.name == "idpaquete"
    ) {
      setData({
        ...formData,
        [event.target.name]: parseInt(event.target.value),
      });
    } else if (event.target.name == "hora") {
      setData({
        ...formData,
        [event.target.name]: event.target.value + ":00:00.00Z",
      });
    } else {
      setData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const buscarCliente = (event) => {
    console.log(event.target.value);
    axios
      .get("http://localhost:8000/clientes/where?telefono=" + telefono)
      .then((result) => {
        if (result.data[0]) {
          setCliente(result.data[0].id);
          setData({ ...formData, ["idcliente"]: cliente });
        } else {
          setCliente(-1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const crearEvento = () => {
    axiosH
      .post("/eventos/", formData)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
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
                    className="input"
                    name="fecha"
                    type="date"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Hora</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    onChange={actualizar}
                    className="input"
                    name="hora"
                    type="adultos"
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
                    className="input"
                    name="celebracion"
                    type="text"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Paquete</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <div className="select">
                    <select onChange={actualizar} name="idpaquete">
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
                    className="input"
                    name="adultos"
                    type="adultos"
                    onChange={actualizar}
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
                    className="input"
                    name="ninios"
                    type="number "
                    onChange={actualizar}
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
                    onChange={(e) => {
                      setTelefono(e.target.value);
                    }}
                    className="input"
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
          {cliente > 0 && (
            <p className="has-text-success is-size-3 has-text-centered">
              Cliente Encontrado
            </p>
          )}
          <button className="button is-primary" onClick={crearEvento}>
            Agregar Evento
          </button>
        </div>
      </div>
    </div>
  );
}
