import {useState,useEffect} from 'react';
import Error from './Error';


const Formulario = ({pacientes,setPacientes,paciente}) => {

  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [fechaAlta,setFechaAlta] = useState('');
  const [sintomas,setSintomas] = useState('');
  const [error,setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFechaAlta(paciente.fechaAlta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarID = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //Validación del formulario
    if([nombre,propietario,email,fechaAlta,sintomas].includes('')){
      setError(true)
      return     
    }
    setError(false)


    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas,
      id: generarID()
    }

    setPacientes([...pacientes,objetoPaciente])
    //Reiniciar formulario 

    setNombre('')
    setPropietario('')
    setEmail('')
    setFechaAlta('')
    setSintomas('')
    setError('')

  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-5">Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span> 
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md py-10 px-5 mb-10">
        {error &&
          <Error>
           <p>Todos los campos son obligatorios</p>
          </Error>
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
          <input value= {nombre} onChange={(e) =>setNombre(e.target.value)} id="mascota" type="text" placeholder="Nombre de la Mascota" className="border-2 w-full mt-2 rounded-md" />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input value= {propietario} onChange={(e) =>setPropietario(e.target.value)} id="propietario" type="text" placeholder="Nombre del Propietario" className="border-2 w-full mt-2 rounded-md" />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input value= {email} onChange={(e) =>setEmail(e.target.value)}id="email" type="email" placeholder="Correo electronico" className="border-2 w-full mt-2 rounded-md" />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input value= {fechaAlta} onChange={(e) =>setFechaAlta(e.target.value)} id="alta" type="date" className="border-2 w-full mt-2 rounded-md" />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea value= {sintomas} onChange={(e) =>setSintomas(e.target.value)} id="sintomas" placeholder="Describe los síntomas" className="border-2 w-full mt-2 rounded-md"/>
        </div>
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-500 cursor-pointer transition-all" value="Agregar Paciente" />
      </form>
    </div>
  )
}

export default Formulario