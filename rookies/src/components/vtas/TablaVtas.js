import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css";


const TablaVtas = ({listadoVtas, setMostrarTablaActualizada}) => {

    //Estado

    const [buscar,setBuscar] = useState('');
    const [listaFiltrada, setListaFiltrada] = useState (listadoVtas);

     //Funciones para ingreso de informacion con evento
  
    const cambioBusqueda = (e) => {
        setBuscar(e.target.value);
    }

    useEffect(() => {
       console.log ("Listado total de ventas de la empresa", listadoVtas)
   }, [listadoVtas]);

   useEffect(()=> {
       setListaFiltrada(
        listadoVtas.filter((elemento) => {
            return (JSON.stringify(elemento).toLowerCase().includes(buscar.toLowerCase()));
       })
       );
   }, [buscar, listadoVtas])
     
   return (
       <div>
           <label for="busqueda">
                <input name="busqueda" type="text" className=" casilla positionLabel" placeholder="Buscar" value={buscar} onChange ={cambioBusqueda} />
            </label>
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
                {listaFiltrada.map ((vtas) => {
                    return(
                        <FilaVtas key = {vtas._id} vtas = {vtas} setMostrarTablaActualizada ={setMostrarTablaActualizada} />
                    );
                    })
                    }
                </tbody>
            </tabla>
    </div>
   )
}

const FilaVtas = ({vtas, setMostrarTablaActualizada}) =>{
//Estado
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    

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

    const ActualizarVta = async () => {
        console.log (actualizacionVta);
        //Enviar datos al backend
        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/vta/actualizar',
            headers: {'Content-Type': 'application/json'},
            data: {...actualizacionVta, id: vtas._id},
          };
          
          await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Venta Actualizada con Exito');
            setEdit(false);
            setMostrarTablaActualizada(true);
          }).catch(function (error) {
            console.error(error);
            toast.error('No se realizaron los cambios');
          });
    }

    const Eliminar = async ()=> {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/vta/eliminar',
            headers: {'Content-Type': 'application/json'},
            data: {id: vtas._id},
          };
          
         await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Venta Eliminada Exitosamente');
            setMostrarTablaActualizada(true);
          }).catch(function (error) {
            console.error(error);
            toast.error('Error Eliminando la Venta');
          });
          setOpenDialog(false);
    }

   
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
                    <input type = 'text'value = {actualizacionVta.total} onChange={(e) => setActualizacionVta({ ...actualizacionVta, total: e.target.value })}  />
                </td>
                </>
            ):(
                <>
                <td>{vtas.fecha}</td>
                <td>{vtas.idVta}</td>
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
                <>
                <Tooltip tittle='Confirmar Edición' arrow placement ='bottom'>
               <button onClick ={ActualizarVta} type="button" className= "btn btn-success" ><i class="far fa-check-circle"/></button>
               </Tooltip>
               <Tooltip tittle='Cancelar Edición' arrow placement ='bottom'>
               <button onClick ={Editar} type="button" className= "btn btn-success" ><i class="fas fa-ban"/></button>
               </Tooltip>
               </>
               ):(
                <>
                <Tooltip tittle = 'Editar' arrow placement ='bottom'>
                <i onClick ={Editar}  class="far fa-edit"/>
                </Tooltip>
                <Tooltip tittle = 'Eliminar' arrow placement ='bottom'>
                <i onClick = {()=> setOpenDialog(true)} class="bi bi-trash"/>
                </Tooltip>
                </>
               )
            }
            <Dialog open = {openDialog}> 
            <h2 className = 'tituloFormulario'>¿Desea Eliminar la Venta?</h2>
            <button onClick = {Eliminar}>Si</button>
            <button onClick = {()=>{setOpenDialog(false)}}>No</button>

            </Dialog>
               
            </div>
            </td>
    </tr>

    )
}

export default TablaVtas;