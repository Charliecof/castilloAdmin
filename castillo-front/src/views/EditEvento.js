import React, { useState, useEffect } from "react";
import axiosH from "../helpers/axiosHelp";
import { useParams } from "react-router-dom";

export default function EditEvento() {
  const [formData, setForm] = useState({
    paqueteevento: {
      id: 0,
      adultos: 0,
      ninios: 0,
      total: 0,
      idpaquete: 0,
    },
  });

  const { id } = useParams();

  useEffect(() => {
    if (formData) {
      axiosH
        .get("/eventos/" + id)
        .then((result) => {
          const aux = { ...result.data };
          const hours = new Date(result.data.hora).getUTCHours();
          const newFecha = result.data.fecha.split("T", 1)[0];
          aux.hora = hours;
          aux.fecha = newFecha;
          console.log(aux);
          setForm({ ...aux });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  //functions
  const actualizar = (event) => {
    if (
      event.target.name == "ninios" ||
      event.target.name == "adultos" ||
      event.target.name == "idpaquete"
    ) {
      setForm({
        ...formData,

        [event.target.name]: event.target.value,
      });
    } else if (event.target.name == "hora") {
      setForm({
        ...formData,
        [event.target.name]: event.target.value,
      });
    } else {
      setForm({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const updateEvento = () => {
    axiosH
      .patch("/eventos/" + id, formData)
      .then((result) => {
        console.log(result);
        //setForm(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteEvento = () => {
    axiosH
      .delete("/eventos/" + id)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="section">
      <h1 className="title">Editar Evento</h1>
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
                    value={formData.fecha}
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
                    placeholder={formData.hora}
                    value={formData.hora}
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
                    placeholder={formData.celebracion}
                    value={formData.celebracion}
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
                    value={formData.paqueteevento.adultos}
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
                    value={formData.paqueteevento.ninios}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 has-text-right">
            <button
              className=" mr-2   button is-primary"
              onClick={updateEvento}
            >
              Editar Evento
            </button>
            <button className=" ml-2 button is-danger" onClick={deleteEvento}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
