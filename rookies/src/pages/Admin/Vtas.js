import React, {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegistroVtas from 'components/vtas/RegistroVtas';
import TablaVtas from 'components/vtas/TablaVtas';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
 

const Vtas = () => {

//Definición de estados, si deseamos que inicialice vacio se deja (" ") y si deseamos que inicialice con un vtas se ubica dentro del parentesis
   
    const [mostrarFormularioRegistro, setMostrarFormularioRegistro] = useState (false);
    const [mostrarVtas, setMostrarVtas] =useState (false);
    const [textoBoton, setTextoBoton] = useState('cerrar');
    const [textoBotonListar, setTextoBotonListar] = useState('cerrar');
    const [mostrarTablaActualizada, setMostrarTablaActualizada] = useState (true);
    const [vtas, setVtas] = useState ([]);
   
    useEffect (() => {
        const ObtenerVtas = async () =>{
            const options = {
                method: 'GET',
                url: 'http://localhost:5000/vtas',
                headers: {'Content-Type': 'application/json'}
              };
              
              await axios.request(options).then(function (response) {
                setVtas(response.data);
              }).catch(function (error) {
                console.error(error);
              });
        }
        if (mostrarTablaActualizada){
            ObtenerVtas();
            setMostrarTablaActualizada(false);
        }
    },[mostrarTablaActualizada])

    

    //Obtener lista de data desde Backend
    useEffect(() => {}, []);

    useEffect (() => {
        if(mostrarVtas){
           setMostrarTablaActualizada(true);
        }       
    }, [mostrarVtas] );

    useEffect(() => {
        if (mostrarFormularioRegistro) {
          setTextoBoton('Cerrar');
        } else {
          setTextoBoton('Nueva venta');
        }
      }, [mostrarFormularioRegistro]);

    useEffect(() => {
    if (mostrarVtas) {
        setTextoBotonListar('Cerrar');
    } else {
        setTextoBotonListar('Listar Ventas');
    }
    }, [mostrarVtas]);

  

    return (
        <div>
            <main>
               <section>
                    <button onClick = {() => setMostrarFormularioRegistro (!mostrarFormularioRegistro)} className = " topButton" >{textoBoton}</button> 
                        <div>{mostrarFormularioRegistro && <RegistroVtas propMostrarTablaVtas = {setMostrarVtas} listadoVtas = {vtas} propAgregarVta = {setVtas} />} 
                        <ToastContainer position="bottom-center" autoClose={5000} /> </div>  
                    <button onClick = {() => setMostrarVtas (!mostrarVtas)} className = "topButton" >{textoBotonListar}</button> 
                    <div>{mostrarVtas && <TablaVtas listadoVtas = {vtas} setMostrarTablaActualizada={setMostrarTablaActualizada}/>} </div> 
                                    
                </section>
        </main>
        </div>
    );
}


export default Vtas;