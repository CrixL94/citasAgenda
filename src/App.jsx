import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoClientes from "./components/ListadoClientes";

function App() {
  const [clientes, setClientes] = useState([]);
  const [cliente,setCliente] = useState({});

  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
        clientes = {clientes}
        setClientes={setClientes} 
        cliente={cliente}/>
        <ListadoClientes 
        clientes = {clientes}
        setCliente={setCliente}/>
      </div>
    </div>
  );
}

export default App;
