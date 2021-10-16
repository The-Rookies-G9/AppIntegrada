import React, {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    fecha: "4/2/21" ,
    estado: "Activo",
    vendedor: "Camilo Parra" , 
    idVendedor: "3276545",
    cliente: "Mirian medina" ,
    tipoIdCliente: 'cedula',
    idCliente: "cv002" ,
    producto: "Camisa Dama",
    idPcto: "cf342" , 
    cantidad: 4 ,
    precio: 3000,
    subTotal: 12000,
    total : 400000,
  } 
]

 
const Vtas = () => {

//Definición de estados, si deseamos que inicialice vacio se deja (" ") y si deseamos que inicialice con un vtas se ubica dentro del parentesis
   
    const [mostrarFormularioRegistro, setMostrarFormularioRegistro] = useState (false);
    const [mostrarVtas, setMostrarVtas] =useState (false);
    const [mostrarSeccionBusqueda, setMostrarSeccionBusqueda] = useState (false);
    const [busquedaGeneral, setBusquedaGeneral] =useState (false);
    const [busquedaEspecifica, setBusquedaEspecifica] = useState (false);
    const [textoBoton, setTextoBoton] = useState('cerrar');
    const [textoBotonListar, setTextoBotonListar] = useState('cerrar');
    const [textoBotonBuscar, setTextoBotonBuscar] = useState('cerrar');
    const [data, setData] = useState ([]);
   
    useEffect(() => {
        if (mostrarFormularioRegistro) {
          setTextoBoton('Cerrar');
        } else {
          setTextoBoton('Nueva venta');
        }
      }, [mostrarFormularioRegistro]);

    useEffect(() => {
    if (mostrarVtas) {
        setTextoBotonListar('Cerrar');
    } else {
        setTextoBotonListar('Listar Ventas');
    }
    }, [mostrarVtas]);

    useEffect (()=>{
        if (mostrarSeccionBusqueda){
            setTextoBotonBuscar('Cerrar');
        }else{
            setTextoBotonBuscar('Buscar');
        }
    }, [mostrarSeccionBusqueda]);

    //Obtener lista de data desde Backend
    useEffect(() => {}, []);

    useEffect (() => {
        setData(DataBackend);
    }, [] );


    return (
        <div>
            <main>
                <nav className = "topnav">
                    <h1>Ventas</h1>
                    <button className = "topButton1">Registrar</button>
                    <button className = "topButton1">Listar</button>
                    <button className = "topButton1">Buscar</button>
                    <button className = "topButton1"> Actualizar</button>
                    
                </nav>
                <section>
                    <button onClick = {() => setMostrarFormularioRegistro (!mostrarFormularioRegistro)} className = " topButton" >{textoBoton}</button> 
                        <div>{mostrarFormularioRegistro && <RegistroVtas propMostrarTablaVtas = {setMostrarVtas} listadoVtas = {data} propAgregarVta = {setData} />} 
                        <ToastContainer position="bottom-center" autoClose={5000} /> </div>  
                    <button onClick = {() => setMostrarVtas (!mostrarVtas)} className = "topButton" >{textoBotonListar}</button> 
                    <div>{mostrarVtas && <TablaVtas listadoVtas = {data}/>} </div> 
                    <button onClick = {()=>setMostrarSeccionBusqueda(!mostrarSeccionBusqueda)} className = "topButton">{textoBotonBuscar}</button>
                        {mostrarSeccionBusqueda && (
                        <section className="mb-3 seccionBusqueda" >
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
                    )}
                    
                </section>
        </main>
        </div>
    );
}


export default Vtas;