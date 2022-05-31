import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Footer from "./components/Footer"
import {useState} from 'react';

function App() {

  const [pacientes,setPacientes] = useState([])
  const [paciente ,setPaciente] = useState([])

  return (
    <div className="container mx-auto"> 
      <Header/>
      <div className="mt-12 md:flex lg:mx-10 "> 
        <Formulario pacientes = {pacientes} setPacientes = {setPacientes} paciente = {paciente}/>
        
        <ListadoPacientes pacientes = {pacientes} setPaciente ={setPaciente} />
      </div>
      <Footer/>
    </div>
  )
}

export default App
