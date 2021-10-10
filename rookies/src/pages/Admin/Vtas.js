import React, {useEffect, useState} from 'react';
import CrudVtas from 'components/Crudvtas';
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

    //Definición de estados
    const [fecha, setFecha] = useState (" ");
    const [vendedor, setVendedor] = useState (" ");
    const [idVendedor, setIdvendedor] =useState (" ");

   useEffect(() =>{
       console.log ('Hola');
   } , [])

   //Funciones para ingreso de informacion
   const cambioFecha = (e) => {
       setFecha("fecha: ", e.target.value);
   }

   const cambioVendedor = (e) => {
    setVendedor("Vendedor: ", e.target.value);
    }

    const cambioIdVendedor = (e) => {
        setFecha("fecha: ", e.target.value);
    }
    
    //Funciones para envio de información al Backend
    const Enviar = () => {

    }



    return (
        <div>
            <main>
                <section className ="topnav ">
                    <h1>Ventas</h1>
                    <Link><button className = "topButton" >Registrar</button> </Link>   
                </section>
                <form>
                    <ul>
                        <li className = "containFormulario">
                            <h1>Formulario Registro Ventas</h1>
                            <input type = "text" className ="form-control" readOnly />
                            <input onChange = {cambioFecha} type = "datetime"placeholder = "Fecha" required/>
                            <input onChange = {cambioVendedor} type = "text" placeholder = "Vendedor"/>
                            <input onChange = {cambioIdVendedor} type = "text" placeholder = "ID Vendedor" required/>
                            <input onChange = {cambioCliente} type = "text" placeholder = "Nombre Cliente" required/>
                            <input onChange = {cambioIdCliente} type = "texte" placeholder = "ID Cliente" required/>
                            <input onChange = {cambioIdPdto} type = "text" placeholder = "Código del Producto" required/>
                            <input onChange = {} type = "number" placeholder ="Unidades de Producto"required/>
                            <input onChange = {} placeholder = "Precio por Producto"required/>
                            <input onChange = {} placeholder = "Subtotal por Producto" required />
                            <input onChange = {} placeholder ="Total Venta"required/>
                            <button type = "button" onClick = {Enviar} className = "topButton"> Enviar</button>

                        </li>
                    </ul>

                </form>
                

                    <section  className="mb-3" >
                        <form>
                            <container >
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">General</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Especifico</a>
                                    </li>
                                </ul>
                            </container>
                        </form>
                        <form >
                            <container className = "container">
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