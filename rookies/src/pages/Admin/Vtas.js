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
   
   



    return (
        <div>
            <main>
                <section className ="topnav">
                    <button onClick = {() => setMostrarFormularioRegistro (!mostrarFormularioRegistro)} className = "topButton" >Registrar</button> 
                    {mostrarFormularioRegistro && <RegistroVtas />}  
                </section>
                <section  className="mb-3" >
                    <form>
                        <ul class="nav nav-tabs containFormulario">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">General</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Especifico</a>
                            </li>
                        </ul>
                
                    </form>
                    <form >
                        <container >
                            <ul>
                                <li>
                                    <label for="idvta">
                                        Cód. Venta
                                        <input name="idvta" className="casilla"  placeholder="Id de venta"/>
                                    </label>
                                    <label for="vendedor">
                                        Vendedor
                                        <input name="vendedor" className="casilla"  placeholder="Ingrese nombre"/>
                                    </label>
                                    <label for="idVendedor">
                                        Cód. Vendedor
                                        <input name="idVendedor" className="casilla"  placeholder="Identificación"/>
                                    </label>
                                </li>
                            </ul>
                            <ul>
                                <li >
                                    <label for="estado">
                                        Estado:
                                        <select name="estado" className="casilla">
                                            <option value="0">Seleccione</option>
                                            <option value="En proceso">En proceso</option>
                                            <option value="Cancelada">Cancelada</option>
                                            <option value="Entregada">Entregada</option>
                                        </select>
                                    </label>
                                    <label for="desdeFecha" className="positionLabel">
                                        Desde:
                                        <input name="desdeFecha" type="date" className="casilla"  placeholder="fecha"/>
                                    </label>
                                    <label for="hastaFecha" className="positionLabel">
                                        Hasta:
                                        <input name="hastaFecha" type="date" className="casilla"  placeholder="fecha"/>
                                    </label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <label for="cliente">
                                        Cliente:
                                        <input name="cliente" className="casilla"  placeholder="Ej: Daniel Pulido"/>
                                    </label>
                                    <label for="tipoId">
                                        Tipo ID:
                                        <select name="tipoId" className="casilla" >
                                            <option value="0">Seleccione</option>
                                            <option value="CC">Cédula de ciudadania</option>
                                            <option value="CE">Cédula de Extranjeria</option>
                                            <option value="TI">Tarjeta de Identidad</option>
                                            <option value="PA">Pasaporte</option>
                                        </select>
                                    </label>
                                    <label for="numeroDoc">
                                        No. ID:
                                        <input name="numeroDoc" type="number" step="7" className="casilla"  placeholder="Ej: 9786566" />
                                    </label>
                                </li>
                            </ul>
                        </container>
                    
                    
                    
                    
                    
                    
                    </form>
                </section>

          <CrudVtas />
  
        </main>
        </div>
    )
}

export default Vtas;