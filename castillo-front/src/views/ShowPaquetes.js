import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axiosH from "../helpers/axiosHelp";
import { useHistory } from "react-router-dom";

const columns = [
  { name: "Id", selector: "id", sortable: true },
  { name: "Adultos", selector: "adultos", sortable: true },
  { name: "Precio", selector: "ninios", sortable: true },
];

export default function ShowPaquetes() {
  const [rows, setRows] = useState([]);
  let history = useHistory();
  useEffect(() => {
    axiosH
      .get("/paquetes/")
      .then((result) => {
        setRows([...result.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="title mt-4 mb-0">Paquetes</h1>
      <DataTable
        striped={true}
        pointerOnHover={true}
        columns={columns}
        data={rows}
        onRowDoubleClicked={(e) => {
          history.push("/paquetes/edit/" + e.id);
        }}
      />
    </div>
  );
}
