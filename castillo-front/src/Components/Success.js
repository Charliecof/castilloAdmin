import React from "react";
import { useHistory } from "react-router-dom";

export default function Success({ title }) {
  let history = useHistory();
  return (
    <div className="section">
      <h1 className="title has-text-centered">{title}</h1>
      <div className="has-text-centered mt-6">
        <button
          onClick={() => {
            history.push("/");
          }}
          className="button is-primary"
        >
          Inicio
        </button>
      </div>
    </div>
  );
}
