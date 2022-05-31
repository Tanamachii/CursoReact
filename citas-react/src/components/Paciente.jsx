const Paciente = ({paciente,setPaciente}) => {
  //destructuring, extra la variabe del objeto y la crea
const {nombre} = paciente
const {propietario} = paciente
const {email} = paciente
const {fechaAlta} = paciente
const {sintomas} = paciente



  return (
    <div className="mx-5 my-3 bg-white shadow-md rounded-xl py-10 px-5">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{''} <span className="font-normal normal-case">{nombre}</span> </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Propietario:{''} <span className="font-normal normal-case">{propietario}</span> </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Email:{''} <span className="font-normal normal-case">{email}</span> </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta:{''} <span className="font-normal normal-case">{fechaAlta}</span> </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:{''} <span className="font-normal normal-case">{sintomas}</span> </p>

    <div className="flex justify-between mt-10">
      <button 
        type="button" 
        className="bg-indigo-600 py-2 px-10 rounded-md
        font-bold shadow-sm text-white hover:bg-indigo-500 uppercase"
        onClick={() => setPaciente(paciente)}
        >Editar
        </button>

      <button 
        type="button" 
        className="bg-red-500 py-2 px-10 rounded-md
        font-bold shadow-sm text-white hover:bg-indigo-500 uppercase"
        >Eliminar
        </button>
    </div>
    </div>
  )
}

export default Paciente