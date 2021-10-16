import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const TablaVtas = ({listadoVtas}) => {
    
    //
    useEffect(() => {
       console.log ("Listado total de ventas de la empresa", listadoVtas)
   }, [listadoVtas]);
  
   return (
       <div>
           <tabla  className="table table-striped ">
               <h1 className ="tituloFormulario" >Lista Total de Ventas</h1>
               <thead>
                   <tr>
                   <th>Fecha</th>
                   <th>Código Venta</th> 
                   <th>Estado</th>
                   <th>Venedor</th>
                   <th>Código Vendedor</th>
                   <th>Cliente</th>
                   <th>Tipo Doc. Cliente</th>
                   <th>N. Doc. Cliente</th>
                   <th>Producto</th>
                   <th>Código Producto</th>
                   <th>Cantidad</th>
                   <th>Precio</th>
                   <th>Subtotal</th>
                   <th>Total</th> 
                   <th>Acciones</th>
                   </tr>
               </thead>
               <tbody>
               {listadoVtas.map ((vtas) => {
                   return(
                       <tr>
                           <td>{vtas.fecha}</td>
                           <td>{vtas.idVta}</td>
                           <td>{vtas.estado}</td>
                           <td>{vtas.vendedor}</td>
                           <td>{vtas.idVendedor}</td>
                           <td>{vtas.cliente}</td>
                           <td>{vtas.tipoIdCliente}</td>
                           <td>{vtas.idCliente}</td>
                           <td>{vtas.producto}</td>
                           <td>{vtas.idPcto}</td>
                           <td>{vtas.cantidad}</td>
                           <td>{vtas.precio}</td>
                           <td>{vtas.subTotal}</td>
                           <td>{vtas.total}</td>
                           <div>
                           <td><button type="button" className="btn btn-primary"><i class="bi bi-pen"></i></button></td>
                           <td><button type="button" className="btn btn-success"><i class="bi bi-save"></i></button></td>
                           <td><button type="button" className="btn btn-warning" ><i class="bi bi-reply"></i></button></td>
                           <td><button  type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                           </div>
                           
                       </tr>
                   );
                   })
                   }
               </tbody>
           </tabla>
       </div>
   )
}

export default TablaVtas;