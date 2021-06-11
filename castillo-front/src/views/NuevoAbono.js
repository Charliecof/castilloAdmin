import React, { useState, useEffect } from "react";
import axiosH from "../helpers/axiosHelp";
import Success from "../Components/Success";

export default function NuevoAbono() {
  const [formData, setForm] = useState({
    fecha: "",
    cantidad: "",
    idpagos: "",
  });

  const [initial, setInitial] = useState([]);

  const [status, setStatus] = useState(false);

  const actualizar = (event) => {
    if (event.target.name != "fecha") {
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

  const crearAbono = () => {
    const today = new Date();
    const fechaS =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setForm({ ...formData, fecha: fechaS });
    axiosH
      .post("/abonos/", formData)
      .then((result) => {
        setStatus(true);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosH
      .get("/pagos")
      .then((result) => {
        setInitial([...result.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!status) {
    return (
      <div className="section">
        <h1 className="title">Abono nuevo </h1>
        <div className="columns">
          <div className="column">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Selecciona Evento</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="select">
                    <select
                      onChange={actualizar}
                      value={formData.idpagos}
                      name="idpagos"
                    >
                      {initial.map((element) => {
                        if (element) {
                          return (
                            <option value={element.pagos[0].id}>
                              {element.celebracion} - {element.cliente.nombre}
                            </option>
                          );
                        } else {
                          return <option value="0">--</option>;
                        }
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Cantidad</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      onChange={actualizar}
                      name="cantidad"
                      type="text"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="has-text-right">
              <button onClick={crearAbono} className="button is-primary">
                Crear Abono
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Success title="Abono agregado Exitosamente" />;
  }
}
