import React, {useEffect, useState} from 'react';


const TablaVtas = ({listadoVtas}) => {
    
    //
    useEffect(() => {
       console.log ("Listado total de ventas de la empresa", listadoVtas)
   }, [listadoVtas]);
  
   return (
       <div>
           <tabla  className="table table-striped">
               <h1>Lista Total de Ventas</h1>
               <thead>
                   <tr>
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
                   <th>Subtotal</th>
                   <th>Valor Total Venta</th> 
                   </tr>
               </thead>
               <tbody>
               {listadoVtas.map ((vtas) => {
                   return(
                       <tr>
                           <td>{vtas.idVta}</td>
                           <td>{vtas.fecha}</td>
                           <td>{vtas.idVendedor}</td>
                           <td>{vtas.vendedor}</td>
                           <td>{vtas.idCliente}</td>
                           <td>{vtas.cliente}</td>
                           <td>{vtas.estado}</td>
                           <td>{vtas.idPcto}</td>
                           <td>{vtas.cantidad}</td>
                           <td>{vtas.vUnit}</td>
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