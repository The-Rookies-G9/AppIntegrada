
import React, {useEffect, useState} from 'react';
import RegistroVtas from 'components/vtas/RegistroVtas';
import TablaVtas from 'components/vtas/TablaVtas';
import {General} from 'components/vtas/Busqueda';
import { Especifica } from 'components/vtas/Busqueda';
import "bootstrap/dist/css/bootstrap.min.css";
  //import { Link } from 'react-router-dom';

//Variable que simula ser backend
const DataBackend =[
  {
    idVta: "v456",
    fecha: 4/2/21 ,
    vendedor: "Camilo Parra" , 
    idVendedor: "3276545",
    cliente: "Mirian medina" ,
    idCliente: "cv002" ,
    estado: "Activo",
    idPcto: "cf342" , 
    cantidad: 4 ,
    vUnit: 3000,
    subTotal: 12000,
    total : 4000,
  }
]

    

const Vtas = () => {

//Definición de estados, si deseamos que inicialice evacio se deja (" ") y si deseamos que inicialice con un vtas se ubica dentro del parentesis
   
    const[mostrarFormularioRegistro, setMostrarFormularioRegistro] = useState (false);
    const[mostrarVtas, setMostrarVtas] =useState (false);
    const[busquedaGeneral, setBusquedaGeneral] =useState (false);
    const[busquedaEspecifica, setBusquedaEspecifica] = useState (false);
    const [textoBoton, setTextoBoton] = useState('cerrar');
    const [textoBotonListar, setTextoBotonListar] = useState('cerrar');
    const [data, setdata] = useState ([]);
   
    useEffect(() => {
        if (mostrarFormularioRegistro) {
          setTextoBoton('Cerrar');
        } else {
          setTextoBoton('Registrar');
        }
      }, [mostrarFormularioRegistro]);

    useEffect(() => {
    if (mostrarVtas) {
        setTextoBotonListar('Cerrar');
    } else {
        setTextoBotonListar('Listar Ventas');
    }
    }, [mostrarVtas]);

    //Obtener lista de data desde Backend
    useEffect(() => {}, []);

    useEffect (() => {
        setdata(DataBackend);
    }, [] );
    

    return (
        <div>
            <main>
                <section >
                    <button onClick = {() => setMostrarFormularioRegistro (!mostrarFormularioRegistro)} className = "topButton" >{textoBoton}</button> 
                    {mostrarFormularioRegistro && <RegistroVtas />}  
                    <button onClick = {() => setMostrarVtas (!mostrarVtas)} className = "topButton" >{textoBotonListar}</button> 
                    {mostrarVtas && <TablaVtas listadoVtas = {data}/>}  
                </section>
                <section  className="mb-3 seccionBusqueda" >
                    <form>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a onClick ={() => setBusquedaGeneral(!busquedaGeneral) } class="nav-link active" aria-current="page" href="#">General</a>
                            </li>
                            {busquedaGeneral && <General />}
                            <li class="nav-item">
                                <a onClick = {()=> setBusquedaEspecifica(!busquedaEspecifica)} class="nav-link active" href="#">Especifico</a>
                            </li>
                            {busquedaEspecifica && <Especifica/>}
                        </ul>
                    </form>
                </section>

    
        </main>
        </div>
    );
}


export default Vtas;