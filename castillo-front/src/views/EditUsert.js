import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosH from "../helpers/axiosHelp";

export default function Register() {
  const [formData, setForm] = useState({});
  const actualizar = (event) => {
    setForm({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  let history = useHistory();

  const editUser = () => {
    axiosH
      .patch("/auth/usuario", formData)
      .then((result) => {
        console.log(result.data);
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="section">
      <div className="columns">
        <div className="column">
          <h2 className="title">Editar Usuario</h2>

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
              <label className="label">Appellido</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    className="input"
                    onChange={actualizar}
                    name="apellido"
                    type="text"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Correo Viejo</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    className="input"
                    onChange={actualizar}
                    name="correoviejo"
                    type="mail"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Correo Nuevo</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    className="input"
                    onChange={actualizar}
                    name="correonuevo"
                    type="mail"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="has-text-right mt-5">
            <button onClick={editUser} className="button is-primary">
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
