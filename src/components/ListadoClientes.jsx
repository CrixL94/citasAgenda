import Cliente from "./Cliente";

const ListadoClientes = ({ clientes }) => {
  return (
    <div className="md:w-1/2 lg:w-1/2 md:h-screen overflow-y-scroll">
      {clientes && clientes.length ? (
        <div>
          <h2 className="font-black text-3xl text-center">Listado Clientes</h2>
          <p className="text-lg mt-5 text-center mb-5">
            Administra tus {""}
            <span className="text-indigo-600 font-bold text-center">
              Clientes y Citas
            </span>
          </p>

          {clientes.map((clienteArray) => {
            return (
              <Cliente key={clienteArray.id} clienteArray={clienteArray} />
            );
          })}
        </div>
      ) : (
        <div>
          <h2 className="font-black text-3xl text-center">
            No hay registros de citas
          </h2>
          <p className="text-lg mt-5 text-center mb-5">
            Añade tus {""}
            <span className="text-indigo-600 font-bold text-center">
              Clientes y Citas
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ListadoClientes;
