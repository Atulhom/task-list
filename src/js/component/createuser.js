import React, { useState } from "react";

// Puedes comentar directamente en la importación si es necesario
// import Todo from "./todo";

// El componente CreateUser
const CreateUser = () => {
  // Estado para el nuevo miembro
  const [newMember, setNewMember] = useState({
    name: "Atulhom6",
  });

  // Función para manejar la creación de usuarios
  const handleCreateUser = () => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/", {
      method: "POST",
      body: [newMember],
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en el post`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Usuario fue creado satisfactoriamente", data);
      })
      .catch((error) => {
        console.error("Error en la solicitud", error);
      });
  };

  // JSX del componente CreateUser
  return (
    <div>
      <button onClick={handleCreateUser}>Crear usuario</button>
    </div>
  );
};

export default CreateUser;
