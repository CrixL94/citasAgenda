const Cliente = ({clienteArray}) => {
  const {nombre,contacto,fecha,hora,servicio} = clienteArray

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Numero Contacto: {""}
        <span className="font-normal normal-case">{contacto}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Hora: {""}
        <span className="font-normal normal-case">{hora}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Servicio a realizar: {""}
        <span className="font-normal normal-case">{servicio}</span>
      </p>
    </div>
  );
};

export default Cliente;
