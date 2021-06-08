import React, { useState } from "react";
import axios from "../helpers/axiosHelp";

export default function AddCliente() {
  const [formData, setData] = useState({ telefono: "" });
  const [finished, setFinished] = useState(false);
  const actualizar = (event) => {
    if (event.target.name == "telefono") {
      setData({
        ...formData,
        [event.target.name]: parseInt(event.target.value),
      });
    } else {
      setData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const agregar = () => {
    console.log(formData);

    axios
      .post("clientes/", formData)
      .then((result) => {
        console.log(result);
        setFinished(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (!finished) {
    return (
      <div>
        <h4 className="title">Agregar Cliente</h4>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Nombre</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  onChange={actualizar}
                  class="input"
                  name="nombre"
                  type="text"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Apellido</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  onChange={actualizar}
                  class="input"
                  name="apellido"
                  type="text"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Telefono</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  onChange={actualizar}
                  class="input"
                  name="telefono"
                  type="number"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Direccion</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  onChange={actualizar}
                  class="input"
                  name="direccion"
                  type="text"
                />
              </p>
            </div>
          </div>
        </div>

        <button className="button" onClick={agregar}>
          Agregar
        </button>
      </div>
    );
  } else {
    return <p>Hola</p>;
  }
}
