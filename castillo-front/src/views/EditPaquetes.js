import React, { useState, useEffect } from "react";
import axiosH from "../helpers/axiosHelp";
import { useParams } from "react-router-dom";
import Success from "../Components/Success";

export default function EditPaquetes() {
  const { id } = useParams();

  const [formData, setForm] = useState({});
  const [status, setStatus] = useState(false);
  useEffect(() => {
    axiosH
      .get("/paquetes/" + id)
      .then((result) => {
        setForm({ ...result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const editarPaquete = () => {
    axiosH
      .patch("/paquetes/", formData)
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
        <h1 className="title">Editar Paquete</h1>
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
                <label className="label">Adultos Base</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      value={formData.adultos}
                      name="adultos"
                      type="number"
                      onChange={actualizar}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Niños Base</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      value={formData.ninios}
                      name="ninios"
                      type="number"
                      onChange={actualizar}
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
                      value={formData.precio}
                      name="precio"
                      type="number"
                      onChange={actualizar}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Precio por persona</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      name="preciounitario"
                      type="number"
                      value={formData.preciounitario}
                      onChange={actualizar}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="has-text-right mt-5">
              <button onClick={editarPaquete} className="button is-primary">
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
        <Success title="Paquete Editado Exitosamente" />
      </>
    );
  }
}
