import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes,setPaciente}) => {

    return (

        <div className="md:w-1/2 lg:w-3/5">
            {pacientes.length !== 0 ? (
                 <div>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-center text-xl mt-5 mb-5">Administra tus {''}<span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
                        {pacientes.map((paciente)=>(
                            <Paciente key = {paciente.id} paciente = {paciente} setPaciente = {setPaciente}/>
                        ))}
                 </div>
            ) : (
                <div>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-center text-xl mt-5 mb-5">Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                    </p>
                </div>
            )}
           

        </div>
    );
};

export default ListadoPacientes;