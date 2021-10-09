import React from 'react';
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

const data = [
    {IdVta: 123, Fecha:3-10-21, Total: 9000, IdPcto: 32-11, Cantidad: 3, Vunit: 3000, Cliente: "Ramiro Meneses", IdCliente: 3216549, vendedor: "Carlos Castro", Estado:"En proceso" },
    {IdVta: 231, Fecha:3-9-21, Total: 4000, IdPcto: 32-12, Cantidad: 2, Vunit: 2000, Cliente: "Camilo Parra", IdCliente: 98457632, vendedor: "Carlos Castro", Estado:"Entregada" },
    {IdVta: 456, Fecha:23-10-21, Total: 15000, IdPcto: 33-11, Cantidad: 3, Vunit: 5000, Cliente: "Carla Giraldo", IdCliente: 1124587, vendedor: "Benito Perez", Estado: "Cancelada" },
];


class CrudVtas extends React.Component{
    //Operaciones
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            IdVta: "",
            Fecha: "",
            Total: "",
            IdPcto: " ",
            Cantidad: " ",
            Vunit: " ",
            Cliente:" ",
            IdCliente: " ", 
            vendedor: " ", 
            IdVende: " ", 
            Estado: " "
        },
      };
    

    render(){
        return (
        <>
           <Container>

           
        
           <Table  className="table table-striped">
               <thead>
                    <th>Id Venta</th> 
                    <th>Fecha</th>
                    <th>Valor Total Venta</th>
                    <th>Id Producto</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Cliente</th>
                    <th>Id Cliente</th>
                    <th>Vendedor</th>
                    <th>Id Vendedor</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </thead>

                <tbody> {
                    this.state.data.map((dato) => (
                        <tr key={dato.IdVta}>
                            <td>{dato.IdVta}</td>{"  "}
                            <td>{dato.Fecha}</td>{"  "}
                            <td>{dato.Total}</td>{"  "}
                            <td>{dato.IdPcto}</td>{"  "}
                            <td>{dato.Cantidad}</td>{"  "}
                            <td>{dato.Vunit}</td>{"  "}
                            <td>{dato.Cliente}</td>{"  "}
                            <td>{dato.IdCliente}</td>{"  "}
                            <td>{dato.vendedor}</td>{"  "}
                            <td>{dato.IdVende}</td>{"  "}
                            <td>{dato.Estado}</td>{"  "}
                            <td><Button color= "primary" ><i class="bi bi-pen"></i></Button></td>{"  "}
                            <td><Button color= "success"><i class="bi bi-save"></i></Button></td>{"  "}
                            <td><Button color="warning" ><i class="bi bi-reply"></i></Button></td>{"  "}
                            <td><Button color="danger"><i class="bi bi-trash"></i></Button></td>
                        </tr>
                        ))
                    }
                </tbody>
                   
                    
                

           </Table>

           </Container>
           </>
            
        )
    
    }

}

export default CrudVtas;