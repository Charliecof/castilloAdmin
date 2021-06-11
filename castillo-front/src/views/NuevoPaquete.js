import React, { useState } from "react";
import axiosH from "../helpers/axiosHelp";
import Success from "../Components/Success";

export default function NuevoPaquete() {
  const [formData, setForm] = useState({
    nombre: "",
    adultos: "",
    ninios: "",
    precio: "",
    preciounitario: "",
  });
  const [status, setStatus] = useState(false);

  const actualizar = (event) => {
    if (event.target.name != "nombre") {
      setForm({
        ...formData,
        [event.target.name]: parseInt(event.target.value),
      });
    } else {
      setForm({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const crearPaquete = () => {
    axiosH
      .post("/paquetes/", formData)
      .then((result) => {
        setStatus(result.data.status);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!status) {
    return (
      <div className="section">
        <h1 className="title">Paquete Nuevo</h1>
        <div className="columns">
          <div className="column">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Nombre</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      onChange={actualizar}
                      name="nombre"
                      type="text"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Adultos Base</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      onChange={actualizar}
                      name="adultos"
                      type="number"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Ninios Base</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      onChange={actualizar}
                      name="ninios"
                      type="number"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Precio Base</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      onChange={actualizar}
                      name="precio"
                      type="number"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Precio Extra</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      onChange={actualizar}
                      name="preciounitario"
                      type="number"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="has-text-right mt-5">
              <button onClick={crearPaquete} className="button is-primary">
                Crear Paquete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Success title="Paquete Creado Exitosamente" />
      </>
    );
  }
}
