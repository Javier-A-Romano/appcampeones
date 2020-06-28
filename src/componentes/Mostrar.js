import React, { useEffect, useState } from "react";

export const Mostrar = ({ nombre }) => {
  const [campeon, setCampeon] = useState("");
  const [titulo, setTitulo] = useState("");
  const [lore, setLore] = useState("");
  useEffect(() => {
    getCampeon();
    console.log(campeon);
  }, [nombre]);

  const getCampeon = async () => {
    try {
      const resp = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/10.13.1/data/es_MX/champion/${nombre}.json`
      );
      const { data } = await resp.json();
      console.log(data);
      //recorrer data que tiene campeones
      for (let key in data) {
        setCampeon(data[key].id);
        setTitulo(data[key].title);
        setLore(data[key].lore);
      }

      return data;
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <div className="card">
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${campeon}_0.jpg`}
        className="card-img-top"
        alt="..."
      />
      <h3>{titulo}</h3>
      <div className="card-body">
        <p className="card-text">{lore}</p>
      </div>
    </div>
  );
};
export default Mostrar;
