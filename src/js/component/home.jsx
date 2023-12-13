import React, { useEffect, useState } from "react";
import Todo from "./todo";

//create your first component
const Home = () => {
  const [followers, SetFollowers] = useState(0);

  function click() {
    SetFollowers(followers + 1);
  }

  function notificacion() {
    alert("tienes un nuefo seguidor");
  }

  // fetch('url') ==> buscar
  // .then((response) => response.json()) --> la respuesta dada por url se transforma en JSON
  // .then((data)=> console.log(data)) --> la info transformada en JSON la guarda en data
  // .catch((error) => console.log(error)) --> en caso de error, muestra el error por console.log

  function getCharacters() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="form-control w-50 mx-auto text-center mt-5 bg-light">
      <Todo />
      <h1>Seguiores actuales: {followers}</h1>
      <button className="" onClick={() => click("")}>
        Subscriberse
      </button>
    </div>
  );
};

export default Home;
