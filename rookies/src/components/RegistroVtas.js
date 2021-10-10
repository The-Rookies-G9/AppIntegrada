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
                    <ul>
                        <li className = "containFormulario">
                            <h1>Formulario Registro Ventas</h1>
                            <input type = "text" className ="form-control" readOnly/>
                            <label for = "Fecha">
                                Fecha
                            <input onChange = {cambioFecha} type = "datetime" name = "Fecha"  required/>
                            </label>
                            <input onChange = {cambioVendedor} type = "text" placeholder = "Vendedor"/>
                            <input onChange = {cambioIdVendedor} type = "text" placeholder = "ID Vendedor" required/>
                            <input onChange = {cambioCliente} type = "text" placeholder = "Nombre Cliente" required/>
                            <input onChange = {cambioIdCliente} type = "text" placeholder = "ID Cliente" required/>
                            <input onChange = {cambioIdPdto} type = "text" placeholder = "Código del Producto" required/>
                            <input onChange = {cambioUnitPdto} type = "number" placeholder ="Unidades de Producto"required/>
                            <input onChange = {cambioPrecio} placeholder = "Precio por Producto"required/>
                            <input onChange = {cambioSubtotal} placeholder = "Subtotal por Producto" required />
                            <input onChange = {cambioTotal} placeholder ="Total Venta"required/>
                            <button type = "button" onClick = {Enviar} className = "topButton"> Enviar</button>

                        </li>
                    </ul>

                </form>
            </main>
        </div>
    )
}

export default RegistroVtas;