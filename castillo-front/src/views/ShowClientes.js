import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axiosH from "../helpers/axiosHelp";
import { useHistory } from "react-router-dom";

const columns = [
  { name: "Id", selector: "id", sortable: true },
  { name: "Nombre", selector: "nombre", sortable: true },
  { name: "Telefono", selector: "telefono", sortable: true },
  { name: "Direccion", selector: "direccion", sortable: true },
];
export default function ShowClientes() {
  const [rows, setRows] = useState([]);
  let history = useHistory();
  useEffect(() => {
    axiosH
      .get("/clientes/")
      .then((result) => {
        console.log(result);
        setRows([...result.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="title mt-4 mb-0">Clientes</h1>
      <DataTable
        striped={true}
        pointerOnHover={true}
        columns={columns}
        data={rows}
        onRowDoubleClicked={(e) => {
          history.push("/clientes/edit/" + e.id);
        }}
      />
    </div>
  );
}
