import React from "react";
import CondicionAtmosferica from "./components/CondicionAtmosferica"; // Asegúrate de que esté en la misma carpeta o ajusta la ruta
import './App.css'; // Asegúrate de que los estilos estén aplicados aquí
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicación de Condiciones <span>Atmosféricas</span></h1>
        {/* Llamada al componente de clima */}
        <CondicionAtmosferica />
      </header>
    </div>
  );
}

export default App;
