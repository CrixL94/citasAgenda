import Cliente from "./Cliente";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-1/2 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Clientes</h2>

      <p className="text-lg mt-5 text-center mb-5">
        Administra tus {""}
        <span className="text-indigo-600 font-bold text-center">
          Clientes y Citas
        </span>
      </p>

      <Cliente/>
      <Cliente/>
      <Cliente/>
    </div>
  );
};

export default ListadoPacientes;
