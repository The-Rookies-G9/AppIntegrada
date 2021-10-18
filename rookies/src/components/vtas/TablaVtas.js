import React, {useEffect, useState, useRef} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const TablaVtas = ({listadoVtas}) => {

    const Form = useRef (null);

    useEffect(() => {
       console.log ("Listado total de ventas de la empresa", listadoVtas)
   }, [listadoVtas]);

   const submitEdit =(e) => {
       e.preventDefault();
    }
  
   return (
       <div>
            <tabla  className="tabla">
                <h1 className ="tituloFormulario" >Lista Total de Ventas</h1>
                <thead>
                    <tr>
                    <th>Fecha</th>
                    <th>Código Venta</th> 
                    <th>Estado</th>
                    <th>Venedor</th>
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
                        <FilaVtas key = {vtas._id} vtas = {vtas}/>
                    );
                    })
                    }
                </tbody>
            </tabla>
    </div>
   )
}

const FilaVtas = ({vtas}) =>{
//Estado
    const [edit, setEdit] = useState(false);
//creando objeto 
    const [actualizacionVta, setActualizacionVta] = useState ({
        _id: vtas._id,
        idVtas: vtas.idVtas,
        fecha: vtas.fecha,
        estado: vtas.estado,
        vendedor: vtas.vendedor,
        cliente: vtas.cliente,
        tipoIdCliente: vtas.tipoIdCliente,
        idCliente: vtas.idCliente,
        producto: vtas.producto,
        idPcto: vtas.idPcto,
        precio: vtas.precio,
        cantidad: vtas.cantidad,
        subTotal: vtas.subTotal,
        total: vtas.total,

    });
//funcion
    const Editar = (() => {
        setEdit(!edit);
    })

   
    return (
        <tr >
            {edit ? ( 
                <>
                <td>
                    <input type = 'text' value = {actualizacionVta.fecha} onChange={(e) => setActualizacionVta({ ...actualizacionVta, fecha: e.target.value })} />
                </td>
                <td>
                    <input type = 'text' value = {actualizacionVta.estado} onChange={(e) => setActualizacionVta({ ...actualizacionVta, estado: e.target.value })} />
                </td>
                <td>
                    <input type = 'text' value = {actualizacionVta.vendedor}onChange={(e) => setActualizacionVta({ ...actualizacionVta, vendedor: e.target.value })} />
                </td>
                <td>
                    <input type = 'text' value = {actualizacionVta.cliente} onChange={(e) => setActualizacionVta({ ...actualizacionVta, cliente: e.target.value })}  />
                </td>
                <td>
                    <input type = 'text' value = {actualizacionVta.tipoIdCliente} onChange={(e) => setActualizacionVta({ ...actualizacionVta, tipoIdCliente: e.target.value })}  />
                </td>
                <td>
                    <input type = 'text' value = {actualizacionVta.idCliente} onChange={(e) => setActualizacionVta({ ...actualizacionVta, idCliente: e.target.value })}  />
                </td>
                <td>
                    <input type = 'text' value = {actualizacionVta.producto} onChange={(e) => setActualizacionVta({ ...actualizacionVta, producto: e.target.value })}  />
                </td>
                <td>
                    <input type = 'text' value = {actualizacionVta.idPcto} onChange={(e) => setActualizacionVta({ ...actualizacionVta, idPcto: e.target.value })} />
                </td>
                <td>
                    <input type = 'text' value = {actualizacionVta.cantidad} onChange={(e) => setActualizacionVta({ ...actualizacionVta, cantidad: e.target.value })}  />
                </td>
                <td>
                    <input type = 'text' value = {actualizacionVta.precio} onChange={(e) => setActualizacionVta({ ...actualizacionVta, precio: e.target.value })} />
                </td>
                <td>
                    <input type = 'text' value = {actualizacionVta.subTotal} onChange={(e) => setActualizacionVta({ ...actualizacionVta, subTotal: e.target.value })} />
                </td>
                <td>
                    <input type = 'text'value = {actualizacionVta.total} onChange={(e) => setActualizacionVta({ ...actualizacionVta, total: e.target.value })} />
                </td>
                </>
            ):(
                <>
                <td>{vtas.fecha}</td>
                <td>{vtas._id}</td>
                <td>{vtas.estado}</td>
                <td>{vtas.vendedor}</td>
                <td>{vtas.cliente}</td>
                <td>{vtas.tipoIdCliente}</td>
                <td>{vtas.idCliente}</td>
                <td>{vtas.producto}</td>
                <td>{vtas.idPcto}</td>
                <td>{vtas.cantidad}</td>
                <td>{vtas.precio}</td>
                <td>{vtas.subTotal}</td>
                <td>{vtas.total}</td>
                </>
                )
            }
             <td>
            <div className = 'espacioBotones' >
               {edit ? (
               <button onClick ={Editar} type="button" className= "btn btn-success" ><i class="far fa-check-circle"/></button>
               ):(
                <i onClick ={Editar}  class="far fa-edit"/>
               )
            }
               <i class="bi bi-trash"/>
            </div>
            </td>
    </tr>

    )
}

export default TablaVtas;