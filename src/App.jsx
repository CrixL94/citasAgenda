import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoClientes from "./components/ListadoClientes";

function App() {
  const [clientes, setClientes] = useState([]);

  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
        clientes = {clientes}
        setClientes={setClientes} />
        <ListadoClientes clientes = {clientes}/>
      </div>
    </div>
  );
}

export default App;
