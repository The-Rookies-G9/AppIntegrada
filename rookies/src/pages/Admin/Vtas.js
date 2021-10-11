import React, {useEffect, useState} from 'react';
import CrudVtas from 'components/Crudvtas';
import RegistroVtas from 'components/RegistroVtas';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table,
    Button,
    Container,
   // Modal,
   // ModalHeader,
  //ModalBody,
   // FormGroup,
    //ModalFooter,
  } from "reactstrap";
  import { Link } from 'react-router-dom';

const Vtas = () => {

//Definición de estados, si deseamos que inicialice evacio se deja (" ") y si deseamos que inicialice con un dato se ubica dentro del parentesis
   
    const[mostrarFormularioRegistro, setMostrarFormularioRegistro] = useState (false);
    const[busquedaGeneral, setBusquedaGeneral] =useState (false);
    const[busquedaEspecifica, setBusquedaEspecifica] = useState (false);
    const [textoBoton, setTextoBoton] = useState('cerrar');
   
    useEffect(() => {
        if (mostrarFormularioRegistro) {
          setTextoBoton('Cerrar');
        } else {
          setTextoBoton('Registrar');
        }
      }, [mostrarFormularioRegistro]);



    return (
        <div>
            <main>
                <section >
                    <button onClick = {() => setMostrarFormularioRegistro (!mostrarFormularioRegistro)} className = "topButton" >{textoBoton}</button> 
                    {mostrarFormularioRegistro && <RegistroVtas />}  
                </section>
                <section  className="mb-3 seccionBusqueda" >
                    <form>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a onClick ={() => setBusquedaGeneral(!busquedaGeneral) } class="nav-link active" aria-current="page" href="#">General</a>
                            </li>
                            {busquedaGeneral && (
                        <container className = "busquedaGeneral">
                            <ul >
                                <li>
                                    <label for="idvta" >
                                       N. Venta
                                        <input name="idvta"  placeholder="Id de venta" className=" casilla positionLabel"/>
                                    </label>
                                    <label for="vendedor" >
                                        Vendedor
                                        <input name="vendedor"  placeholder="Ingrese nombre" className = "casilla positionLabel"/>
                                    </label>
                                    <label for="idVendedor" >
                                       Código
                                        <input name="idVendedor"   placeholder="Id Vendedor" className = "casilla positionLabel"/>
                                    </label>
                                </li>
                            </ul>
                            <ul >
                                <li >
                                    <label for="estado">
                                        Estado:
                                        <select name="estado" className=" casilla positionLabel">
                                            <option value="0">Seleccione</option>
                                            <option value="En proceso">En proceso</option>
                                            <option value="Cancelada">Cancelada</option>
                                            <option value="Entregada">Entregada</option>
                                        </select>
                                    </label>
                                    <label for="desdeFecha" >
                                        Desde:
                                        <input name="desdeFecha" type="date" className=" casilla positionLabel" placeholder="fecha"/>
                                    </label>
                                    <label for="hastaFecha" >
                                        Hasta:
                                        <input name="hastaFecha" type="date" className=" casilla positionLabel"  placeholder="fecha"/>
                                    </label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <label for="cliente">
                                        Cliente:
                                        <input name="cliente" className=" casilla positionLabel"  placeholder="Ej: Daniel Pulido"/>
                                    </label>
                                    <label for="tipoId">
                                        Tipo ID:
                                        <select name="tipoId" className=" casilla positionLabel" >
                                            <option value="0">Seleccione</option>
                                            <option value="CC">Cédula de ciudadania</option>
                                            <option value="CE">Cédula de Extranjeria</option>
                                            <option value="TI">Tarjeta de Identidad</option>
                                            <option value="PA">Pasaporte</option>
                                        </select>
                                    </label>
                                    <label for="numeroDoc">
                                        No. ID:
                                        <input name="numeroDoc" type="number" step="7" className=" casilla positionLabel" placeholder="Ej: 9786566" />
                                    </label>
                                </li>
                            </ul>
                        </container>)
                            }
                            <li class="nav-item">
                                <a onClick = {()=> setBusquedaEspecifica(!busquedaEspecifica)} class="nav-link" href="#">Especifico</a>
                                identificador de la venta, documento de identidad del cliente o nombre del cliente
                            </li>
                            
                        </ul>
                
                    </form>
                    <form >
                        
                    
                    
                    
                    
                    
                    
                    </form>
                </section>

          <CrudVtas />
  
        </main>
        </div>
    )
}

export default Vtas;