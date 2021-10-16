import React, {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";



const RegistroVtas = ({propMostrarTablaVtas, listadoVtas, propAgregarVta}) => {

    //Definición de estados

    const [idVta , setIdVta] = useState (" ");
    const [fecha, setFecha] = useState (" ");
    const [estado, setEstado] = useState (" ");
    const [vendedor, setVendedor] = useState (" ");
    const [idVendedor, setIdVendedor] = useState ( " ");
    const [cliente, setCliente] =useState (" ");
    const [tipoIdCliente, setTipoIdCliente] =useState (" ");
    const [idCliente, setIdCliente] = useState (" ");
    const [producto, setProducto] = useState (" ");
    const [idPdto, setIdPdto] = useState ( " ");
    const [cantidad, setCantidad] = useState (" ");
    const [precio, setPrecio] =useState (" ");
    const [subtotal, setSubtotal] =useState (" ");
    const [total, setTotal] =useState (" ");
    const [mostrarSubtotalPdto, setMostarSubtotalProducto] = useState (false);
    const [mostrarTotalVta, setMostrarTotalVta] = useState (false);
    

    useEffect(() => {}, []);

   useEffect(() =>{
       console.log ( );
   } , [idVta, fecha, estado, vendedor, idVendedor, cliente, tipoIdCliente, idCliente, producto, idPdto, cantidad, precio, subtotal, total])

   //Funciones para ingreso de informacion con evento
    const cambioidVta = (e) => {
        setIdVta(e.target.value);
    }

   const cambioFecha = (e) => {
       setFecha(e.target.value);
   }

   const cambioEstado = (e) => {
       setEstado(e.target.value);
   }

   const cambioVendedor = (e) => {
    setVendedor( e.target.value);
    }

    const cambioIdVendedor = (e) => {
        setIdVendedor( e.target.value);
    }

    const cambioCliente = (e) => {
        setCliente( e.target.value);
    }

    const cambioTipoIdCliente = (e) =>{
        setTipoIdCliente(e.target.value);
    }

    const cambioIdCliente = (e) => {
        setIdCliente ( e.target.value);
    }

    const cambioProducto = (e) => {
        setProducto( e.target.value);
    }
    const cambioIdPdto = (e) => {
        setIdPdto( e.target.value);
    }

    const cambioCantidad = (e) => {
        setCantidad ( e.target.value);
    }

    const cambioPrecio = (e) => {
        setPrecio (e.target.value);
    }
    const cambioSubtotal = (e) => {
        setSubtotal ( e.target.value);
    }

    const cambioTotal = (e) => {
        setTotal ( e.target.value);
    }

    
    
    //Funciones para envio de información al Backend
    const Enviar = (() => {
        console.log('Código de venta',idVta,'Fecha', fecha,'Vendedor', vendedor, 
        'Código del vendedor',"Tipo de Documento", tipoIdCliente, idVendedor, 'Cliente', cliente, 'Código Cliente',idCliente,
        'Producto', producto,'Código Producto', idPdto, 'Cantidad', cantidad,'Precio', precio, 
        'Subtotal',subtotal,'Total venta', total);
        toast ('Guardado con Exito');
        propMostrarTablaVtas (true);
        propAgregarVta ([ ...listadoVtas, { idVta:idVta, fecha: fecha, estado: estado, vendedor: vendedor, idVendedor: idVendedor, cliente: cliente, tipoIdCliente: tipoIdCliente, idCliente: idCliente, producto:producto, idPdto: idPdto, cantidad: cantidad, precio:precio, subtotal: subtotal, total:total }, ]);
    })
   
    //Funciones
    const agregarProducto =(() => {
        console.log ('Producto', producto,'Código Producto', idPdto, 'Cantidad', cantidad,'Precio', precio, 'subtotal',subtotal )
    })
    
    //Función para mostrar el subtotal de venta de formulario de registro de ventas
    useEffect (()=>{
        if(mostrarSubtotalPdto){
         var valorParcial = parseFloat (precio * cantidad);
         setSubtotal(valorParcial);
         console.log (valorParcial);
     }
    },[mostrarSubtotalPdto])

    //Función para mostrar el total de venta de formulario de registro de ventas
    useEffect (()=>{
        if(mostrarTotalVta){
            var  vtaNeta = 0
            vtaNeta = parseFloat(vtaNeta + subtotal);
            setTotal(vtaNeta);
         console.log (vtaNeta);
     }
    },[mostrarTotalVta]) 

    




    //Formulario de creación de ventas
    return (
        <div>
            <main>
                <form id = 'formularioRegistroVtas'>
                    <ul className ="containFormulario">
                        <h1 className = "tituloFormulario">Formulario Registro Ventas</h1>
                            <li className = "row">
                                <label htmlFor = "idVta" className ="col">
                                    Código de Venta
                                <input type = "text" name = "idVta"  className = "form-control"  value= {idVta} readOnly />
                                </label>
                                <label htmlFor = 'Fecha' className = "col">
                                    Fecha
                                    <input type = "date" name = "Fecha" className = "form-control"  value = {fecha} onChange = {cambioFecha} required/>
                                </label>
                                <label htmlFor="estado"  className="col" defaultValue = {0}>
                                    Estado:
                                <select name="estado" className = "form-control"   required>
                                    <option value ={0} >Seleccione</option>
                                    <option value={estado} onChange = {cambioEstado}>En proceso</option>
                                    <option value={estado} onChange = {cambioEstado}>Cancelada</option>
                                    <option value={estado} onChange = {cambioEstado}>Entregada</option>
                                </select>
                                </label>
                            </li>
                            <li className = "row">
                            <h5 className = "tituloFormulario">Datos Vendedor</h5>
                                <label className = "col" htmlFor="vendedor">
                                    Vendedor
                                <input  name = "vendedor"  className = "form-control" type = "text" placeholder = "Nombre Vendedor" onChange = {cambioVendedor} value = {vendedor}/>
                                </label>
                                <label htmlFor = "idVendedor" className = "col">
                                    Código del Vendedor
                                <input  name = "idVendedor"  className = "form-control" type = "text" placeholder = "Identificación del Vendedor" value = {idVendedor} onChange = {cambioIdVendedor} required/>
                                </label>
                            </li>
                            <li className = "row">
                                <h5 className = "tituloFormulario">Datos Cliente</h5>
                                <label htmlFor = "cliente" className = "col">
                                    Nombre Completo del Cliente
                                <input  name ="cliente"  className = "form-control" type = "text" placeholder = "Nombre completo del Cliente" value = {cliente} onChange = {cambioCliente} required/>
                                </label>
                                <label htmlFor="tipoId" className="col" >
                                    Tipo de Documento de Identidad:
                                    <select name="tipoId" className = "form-control" defaultValue={0} value={tipoIdCliente} onChange = {cambioTipoIdCliente} required>
                                    <option value={0}>Seleccione</option>
                                    <option value={tipoIdCliente} >Cédula de ciudadania</option>
                                    <option value={tipoIdCliente} >Cédula de Extranjeria</option>
                                    <option value={tipoIdCliente} >Tarjeta de Identidad</option>
                                    <option value={tipoIdCliente} >Pasaporte</option>
                                    <option value={tipoIdCliente} >NIT</option>
                                    </select>
                                </label>
                                <label htmlFor = "idCliente" className = "col">
                                    N. de Dcumento de Identidad
                                <input  name = "idCliente"  className = "form-control"type = "text" placeholder = "14567987" value ={idCliente} onChange = {cambioIdCliente} required/>
                                </label>
                            </li>
                            <li className = "row">
                            <h5 className = "tituloFormulario">Datos Productos</h5>
                                <label htmlFor = "idPdto" className = "col">
                                    Código
                                <input  name ="idPdto" type = "text" placeholder = "Código del Producto" className = "form-control" value = {idPdto} onChange = {cambioIdPdto} required/>
                                </label>
                                <label htmlFor="producto" className = "col">
                                    Producto
                                <input name= "producto"  type = "text" placeholder = "Producto" className = "form-control" value = {producto} onChange = {cambioProducto} required/>
                                </label>
                                <label htmlFor = "cantidad" className = "col">
                                     Unidades 
                                <input  name = "cantidad" id= "valor1" type = "number" min = "1"  placeholder ="Unidades de Producto" className = "form-control" value ={cantidad} onChange = {cambioCantidad} onClick = {()=> setMostarSubtotalProducto(!mostrarSubtotalPdto)} required/>
                                </label>
                                <label htmlFor  = "precio" className = "col">
                                    Precio 
                                <input  name ="precio" id = "valor2" placeholder = "Precio por Producto" className = "form-control" value = {precio} onChange = {cambioPrecio} onClick = {()=> setMostarSubtotalProducto(!mostrarSubtotalPdto)} required/>
                                </label>
                                <label htmlFor ="subtotal" className = "col">
                                    Subtotal
                                <input className = "form-control" name = "subtotal"  value = {subtotal} onChange = {cambioSubtotal} readOnly/>
                                    <div>{mostrarSubtotalPdto}</div>
                                </label>
                                <div className = "col">
                                <button type = "button"  className = "button " onClick = {agregarProducto} >Agregar</button>
                                </div>
                            </li>
                            <br></br>
                            <div className = "row">
                                <button type = "button"  className = "button " onClick = {() => { setMostrarTotalVta(!mostrarTotalVta); }} >Total</button>
                            </div>
                            <li className = "row"> 
                                <label htmlFor = "total" className = "col">
                                    Total de la Venta
                                <input  name = "total"  placeholder = "Total Venta" className = "form-control" value ={total} onChange = {cambioTotal} readOnly  />
                                <div>{mostrarTotalVta}</div>
                                </label>
                            </li>
                            <div className = "row">
                            <button type = "submit"  className = "button " onClick = {Enviar} > Guardar</button>   
                            </div>
                    </ul>
                </form>
            </main>
        </div>
    )
}

export default RegistroVtas;