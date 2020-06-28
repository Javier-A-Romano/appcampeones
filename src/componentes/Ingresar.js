import React from "react";
import { useState } from "react";
import Mostrar from "./Mostrar";
export const Ingresar = () => {
  const [inputValue, setInputValue] = useState(""); // ''
  const [lista, setLista] = useState([]); // ''

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setLista((lista) => [inputValue, ...lista]);
      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
      <div className="card-columns">
        {lista.map((list) => (
          <Mostrar nombre={list} />
        ))}
      </div>
    </div>
  );
};
export default Ingresar;
