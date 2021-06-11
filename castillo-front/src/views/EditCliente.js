import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Success from "../Components/Success";
import axiosH from "../helpers/axiosHelp";

export default function EditCliente() {
  const { id } = useParams();

  const [formData, setForm] = useState({});
  const [status, setStatus] = useState(false);

  const actualizar = (event) => {
    if (event.target.name == "telefono") {
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
  useEffect(() => {
    axiosH
      .get("/clientes/" + id)
      .then((result) => {
        setForm({ ...result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editarCliente = () => {
    axiosH
      .patch("/clientes/", formData)
      .then((result) => {
        console.log(result);
        setStatus(result.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (!status) {
    return (
      <div className="section">
        <h1 className="title">Editar Cliente</h1>
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
                      value={formData.nombre}
                      name="nombre"
                      type="text"
                      onChange={actualizar}
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
                      className="input"
                      value={formData.apellido}
                      name="apellido"
                      type="text"
                      onChange={actualizar}
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
                      className="input"
                      value={formData.telefono}
                      name="telefono"
                      type="number"
                      onChange={actualizar}
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
                      className="input"
                      value={formData.direccion}
                      name="direccion"
                      type="text"
                      onChange={actualizar}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="has-text-right mt-5">
              <button onClick={editarCliente} className="button is-primary">
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Success title="Cliente Editado Exitosamente" />
      </>
    );
  }
}
