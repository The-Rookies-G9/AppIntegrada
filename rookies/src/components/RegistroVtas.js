import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


const RegistroVtas = () => {

    //Definición de estados

    const [fecha, setFecha] = useState (" ");
    const [vendedor, setVendedor] = useState (" ");
    const [idVendedor, setIdVendedor] = useState ( " ");
    const [cliente, setCliente] =useState (" ");
    const [idCliente, setIdCliente] = useState (" ");
    const [idPdto, setIdPdto] = useState ( " ");
    const [unitPdto, setUnitPdto] = useState (" ");
    const [precio, setPrecio] =useState (" ");
    const [subtotal, setSubtotal] =useState (" ");
    const [total, setTotal] =useState (" ");

   useEffect(() =>{
       console.log ('Hola');
   } , [fecha, vendedor, idVendedor, cliente, idCliente, idPdto, unitPdto, precio, subtotal, total])

   //Funciones para ingreso de informacion
   const cambioFecha = (e) => {
       setFecha("fecha: ", e.target.value);
   }

   const cambioVendedor = (e) => {
    setVendedor("Vendedor: ", e.target.value);
    }

    const cambioIdVendedor = (e) => {
        setIdVendedor("Id Vendedor ", e.target.value);
    }

    const cambioCliente = (e) => {
        setCliente("Cliente ", e.target.value);
    }

    const cambioIdCliente = (e) => {
        setIdCliente ("Id Cliente", e.target.value);
    }

    const cambioIdPdto = (e) => {
        setIdPdto("Id Producto", e.target.value);
    }

    const cambioUnitPdto = (e) => {
        setUnitPdto ("Unidad Producto", e.target.value);
    }

    const cambioPrecio = (e) => {
        setPrecio ("Precio por Producto", e.target.value);
    }

    const cambioSubtotal = (e) => {
        setPrecio ("Subtotal por Producto", e.target.value);
    }

    const cambioTotal = (e) => {
        setPrecio ("Total Venta", e.target.value);
    }
    
    //Funciones para envio de información al Backend
    const Enviar = () => {
        console.log('El valor de la variable cliente es ', cliente);
    }



    return (
        <div>
            <main>
                <form>
                    <ul className ="containFormulario">
                        <h1 className = "tituloFormulario">Formulario Registro Ventas</h1>
                            <li>
                                <input type = "text" className ="form-control" readOnly />
                                <label for = "Fecha">
                                    Fecha
                                    <input onChange = {cambioFecha} type = "datetime" name = "Fecha" className = "form-control" required/>
                                </label>
                            </li>
                            <li className = "row">
                                <div className = "col">
                                <input onChange = {cambioVendedor}  className = "form-control" type = "text" placeholder = "Vendedor"/>
                                </div>
                                <div className = "col">
                                <input onChange = {cambioIdVendedor} className = "form-control" type = "text" placeholder = "ID Vendedor" required/>
                                </div>
                            </li>
                            <li className = "row">
                                <div className = "col">
                                <input onChange = {cambioCliente} className = "form-control" type = "text" placeholder = "Nombre Cliente" required/>
                                </div>
                                <div className = "col">
                                <input onChange = {cambioIdCliente} className = "form-control"type = "text" placeholder = "ID Cliente" required/>
                                </div>
                            </li>
                            <li className = "row">
                                <div className = "col">
                                <input onChange = {cambioIdPdto} type = "text" placeholder = "Código del Producto" className = "form-control" required/>
                                </div>
                                <div className = "col">
                                <input onChange = {cambioUnitPdto} type = "number" placeholder ="Unidades de Producto"className = "form-control" required/>
                                </div>
                                <div className = "col">
                                <input onChange = {cambioPrecio} placeholder = "Precio por Producto" className = "form-control" required/>
                                </div>
                                <div className = "col">
                                <input onChange = {cambioSubtotal} placeholder = "Subtotal por Producto" className = "form-control" required />
                                </div>
                            </li>
                                <li > <input onChange = {cambioTotal} placeholder = "Total Venta" className = "form-control" required className="form-control" /></li>
                            <button type = "button" onClick = {Enviar} className = "topButton"> Guardar</button>
                    </ul>
                </form>
            </main>
        </div>
    )
}

export default RegistroVtas;