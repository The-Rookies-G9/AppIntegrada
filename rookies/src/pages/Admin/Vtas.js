import React, {useEffect, useState} from 'react';
import CrudVtas from 'components/vtas/Crudvtas';
import RegistroVtas from 'components/vtas/RegistroVtas';
import {General} from 'components/vtas/Busqueda';
import { Especifica } from 'components/vtas/Busqueda';
import "bootstrap/dist/css/bootstrap.min.css";
  //import { Link } from 'react-router-dom';

//Variable que simula ser backend
const DataBackend = [ 
    {IdVta: 123, Fecha:3-10-21, Total: 9000, IdPcto: 32-11, Cantidad: 3, Vunit: 3000, Cliente: "Ramiro Meneses", IdCliente: 3216549, vendedor: "Carlos Castro", Estado:"En proceso" },
    {IdVta: 231, Fecha:3-9-21, Total: 4000, IdPcto: 32-12, Cantidad: 2, Vunit: 2000, Cliente: "Camilo Parra", IdCliente: 98457632, vendedor: "Carlos Castro", Estado:"Entregada" },
    {IdVta: 456, Fecha:23-10-21, Total: 15000, IdPcto: 33-11, Cantidad: 3, Vunit: 5000, Cliente: "Carla Giraldo", IdCliente: 1124587, vendedor: "Benito Perez", Estado: "Cancelada" },
]

const Vtas = () => {

//Definición de estados, si deseamos que inicialice evacio se deja (" ") y si deseamos que inicialice con un dato se ubica dentro del parentesis
   
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
                                <a onClick = {()=> setBusquedaEspecifica(!busquedaEspecifica)} class="nav-link" href="#">Especifico</a>
                                identificador de la venta, documento de identidad del cliente o nombre del cliente
                            </li>
                            {busquedaEspecifica && (
                                <div>
                                <form>
                                identificador de la venta, documento de identidad del cliente o nombre del cliente en la información de las ventas registradas en el sistema.
                                </form>
                            </div>
                            )}
                        </ul>
                    </form>
                </section>

          <CrudVtas />
        </main>
        </div>
    );
}

const TablaVtas = ({listadoVtas}) => {
    
     //
     useEffect(() => {
        console.log ("Listado total de ventas de la empresa", listadoVtas)
    }, [listadoVtas]);
   
    return (
        <div>
            <tabla>
                <h1>Lista Total de Ventas+</h1>
                <thead>
                    <th>Id Venta</th> 
                    <th>Fecha</th>
                    <th>Vendedor</th>
                    <th>Id Vendedor</th>
                    <th>Cliente</th>
                    <th>Id Cliente</th>
                    <th>Estado</th>
                    <th>Producto</th>
                    <th>Id Producto</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Valor Total Venta</th> 
                </thead>
                <tbody>
                {listadoVtas.map ((dato) => {
                    return(
                        <div>
                            <tr key={dato.IdVta}>
                                <td>{dato.IdVta}</td>{"  "}
                                <td>{dato.Fecha}</td>{"  "}
                                <td>{dato.Total}</td>{"  "}
                                <td>{dato.IdPcto}</td>{"  "}
                                <td>{dato.Cantidad}</td>{"  "}
                                <td>{dato.Vunit}</td>{"  "}
                                <td>{dato.Cliente}</td>{"  "}
                                <td>{dato.IdCliente}</td>{"  "}
                                <td>{dato.vendedor}</td>{"  "}
                                <td>{dato.IdVendedor}</td>{"  "}
                                <td>{dato.Estado}</td>{"  "}
                            </tr>
                        </div>
                    );
                    })
                    }
          
                </tbody>
            </tabla>
        </div>
    )
}

export default Vtas;