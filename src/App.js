import React from "react";
import Card from "./Card";
import "./style.css";

export default function App() {
  const handleClick = () => {
    alert("¡Botón de acción clickeado!");
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div className="ux-card">
        <Card
          title="OK : Hola Mundo!!!"
          description="Esta es una descripción del contenido del card. Puedes personalizarla según sea necesario."
          image="https://placehold.co/600x400/orange/white"
          actionText="Ver más"
          onActionClick={handleClick}
        />
      </div>
    </div>    
  );
}
