import React, { useState } from "react";
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

  const login = () => {
    axiosH
      .post("/auth/signup", formData)
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
          <h2 className="title">Registrate</h2>

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
              <label className="label">Correo</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    className="input"
                    onChange={actualizar}
                    name="correo"
                    type="mail"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Password</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    className="input"
                    onChange={actualizar}
                    name="password"
                    type="password"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="has-text-right mt-5">
            <button onClick={login} className="button is-primary">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
