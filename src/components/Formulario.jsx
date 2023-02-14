const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-1/2">
      <h2 className="font-black text-3xl text-center">Seguimiento Citas</h2>

      <p className="text-lg mt-5 text-center mb-5">
        Añade Clientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                     hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar Cita"
        />
      </form>
    </div>
  );
};

export default Formulario;
