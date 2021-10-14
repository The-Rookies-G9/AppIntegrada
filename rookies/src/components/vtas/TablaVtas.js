import React, {useEffect, useState} from 'react';


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
                   <th>Código Venta</th> 
                   <th>Fecha</th>
                   <th>Estado</th>
                   <th>Venedor</th>
                   <th>Código Vendedor</th>
                   <th>Cliente</th>
                   <th>Tipo Doc. Cliente</th>
                   <th>N. Doc. Cliente</th>
                   <th>Producto</th>
                   <th>Código Producto</th>
                   <th>Cantidad</th>
                   <th>Precio unitario</th>
                   <th>Subtotal</th>
                   <th>Total Venta</th> 
                   </tr>
               </thead>
               <tbody>
               {listadoVtas.map ((vtas) => {
                   return(
                       <tr>
                           <td>{vtas.idVta}</td>
                           <td>{vtas.fecha}</td>
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