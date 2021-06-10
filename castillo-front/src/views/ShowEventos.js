import React, { useEffect, useState } from "react";
import axiosH from "../helpers/axiosHelp";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const columns = [
  { name: "Folio", selector: "id", sortable: true },
  { name: "Fecha", selector: "fecha", sortable: true },
  { name: "Total", selector: "total", sortable: true },
  { name: "Cliente", selector: "cliente.nombre", sortable: true },
  { name: "Celebracion", selector: "celebracion", sortable: true },
];

export default function ShowEventos() {
  const [rows, setRows] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axiosH
      .get("/eventos/")
      .then((result) => {
        setRows(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <DataTable
        columns={columns}
        data={rows}
        title="Eventos"
        striped={true}
        pointerOnHover={true}
        pagination={true}
        onRowDoubleClicked={(e) => {
          history.push("/eventos/edit/" + e.id);
        }}
        selectableRowsHighlight={true}
      />
    </div>
  );
}
