import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ clientes, setClientes, cliente, setCliente }) => {
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [servicio, setServicio] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(cliente).length > 0) {
      //console.log(cliente);
      setNombre(cliente.nombre);
      setContacto(cliente.contacto);
      setFecha(cliente.fecha);
      setHora(cliente.hora);
      setServicio(cliente.servicio);
    }
  }, [cliente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Enviando");

    //validacion del formulario
    if ([nombre, contacto, fecha, hora, servicio].includes("")) {
      //console.log("Hay algun campo vacio");
      setError(true);
      return;
    }
    setError(false);

    //Objeto de clientes
    const objetoCLientes = {
      nombre,
      contacto,
      fecha,
      hora,
      servicio,
    };

    if (cliente.id) {
      //Editando registro
      objetoCLientes.id = clientes.id;

      const clientesActualizados = clientes.map((clienteState) =>
        clienteState.id === cliente.id ? objetoCLientes : clienteState
      );

      setClientes(clientesActualizados);
      setCliente = {};
    } else {
      //Nuevo registro
      objetoCLientes.id = generarId();
      setClientes([...clientes, objetoCLientes]);
    }

    // reinicar form
    setNombre("");
    setContacto("");
    setFecha("");
    setServicio("");
  };

  return (
    <div className="md:w-1/2 lg:w-1/2 mx-3">
      <h2 className="font-black text-3xl text-center">Seguimiento Citas</h2>

      <p className="text-lg mt-5 text-center mb-5">
        Añade Clientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {/*Validacion de los campos */}
        {error && <Error mensaje="Todos los campos son obligatorios" />}

        <div className="mb-5">
          <label
            htmlFor="cliente"
            className="block text-grey-700 uppercase font-bold"
          >
            Nombre Cliente
          </label>
          <input
            id="cliente"
            type="text"
            placeholder="Nombre del cliente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="contacto"
            className="block text-grey-700 uppercase font-bold"
          >
            Numero de Contacto
          </label>
          <input
            id="contacto"
            type="tel"
            placeholder="Nombre de contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={contacto}
            onChange={(e) => {
              setContacto(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-grey-700 uppercase font-bold"
          >
            Fecha de la Cita
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => {
              setFecha(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="hora"
            className="block text-grey-700 uppercase font-bold"
          >
            Hora de la Cita
          </label>
          <input
            id="hora"
            type="time"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={hora}
            onChange={(e) => {
              setHora(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="servicio"
            className="block text-grey-700 uppercase font-bold"
          >
            Servicio a Realizar
          </label>
          <textarea
            id="servicio"
            placeholder="Describe el servicio"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={servicio}
            onChange={(e) => {
              setServicio(e.target.value);
            }}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                     hover:bg-indigo-700 cursor-pointer transition-colors"
          value={cliente.id ? "Editar Cliente" : "Agregar Cliente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
