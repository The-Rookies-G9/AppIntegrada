import React, {useEffect, useState} from 'react';
import CrudVtas from 'components/vtas/Crudvtas';
import RegistroVtas from 'components/vtas/RegistroVtas';
import ListadoVtas from 'components/vtas/ListadoVtas';
import {General, Especifica} from 'components/vtas/Busqueda';
import "bootstrap/dist/css/bootstrap.min.css";
  //import { Link } from 'react-router-dom';


const Vtas = () => {

//Definición de estados, si deseamos que inicialice evacio se deja (" ") y si deseamos que inicialice con un dato se ubica dentro del parentesis
   
    const[mostrarFormularioRegistro, setMostrarFormularioRegistro] = useState (false);
    const[mostrarVtas, setMostrarVtas] =useState (false);
    const[busquedaGeneral, setBusquedaGeneral] =useState (false);
    const[busquedaEspecifica, setBusquedaEspecifica] = useState (false);
    const [textoBoton, setTextoBoton] = useState('cerrar');
    const [textoBotonListar, setTextoBotonListar] = useState('cerrar');
   
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
          setTextoBotonListar('Listado de Ventas');
        }
      }, [mostrarVtas]);

    return (
        <div>
            <main>
                <section >
                    <button onClick = {() => setMostrarFormularioRegistro (!mostrarFormularioRegistro)} className = "topButton" >{textoBoton}</button> 
                    {mostrarFormularioRegistro && <RegistroVtas />}  
                    <button onClick = {() => setMostrarVtas (!mostrarVtas)} className = "topButton" >{textoBotonListar}</button> 
                    {mostrarVtas && <ListadoVtas />}  
                </section>
                <section  className="mb-3 seccionBusqueda" >
                    <form>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a onClick ={() => setBusquedaGeneral(!busquedaGeneral) } class="nav-link active" aria-current="page" href="#">General</a>
                            </li>
                            {busquedaGeneral && <General />}
                            <li class="nav-item">
                                <a onClick = {()=> setBusquedaEspecifica(!busquedaEspecifica)} class="nav-link" href="#">Especifico</a>
                                identificador de la venta, documento de identidad del cliente o nombre del cliente
                            </li>
                            {busquedaEspecifica && <Especifica />}
                        </ul>
                    </form>
                </section>

          <CrudVtas />
        </main>
        </div>
    )
}

export default Vtas;