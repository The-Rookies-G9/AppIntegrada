import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const General = () => {
    return (
        <container className = "busquedaGeneral">
    <ul >
        <li>
            <label for="idvta" >
               N. Venta
                <input name="idvta"  placeholder="Id de venta" className=" casilla positionLabel"/>
            </label>
            <label for="vendedor" >
                Vendedor
                <input name="vendedor"  placeholder="Ingrese nombre" className = "casilla positionLabel"/>
            </label>
            <label for="idVendedor" >
               Código
                <input name="idVendedor"   placeholder="Id Vendedor" className = "casilla positionLabel"/>
            </label>
        </li>
    </ul>
    <ul >
        <li >
            <label for="estado">
                Estado:
                <select name="estado" className=" casilla positionLabel">
                    <option value="0">Seleccione</option>
                    <option value="En proceso">En proceso</option>
                    <option value="Cancelada">Cancelada</option>
                    <option value="Entregada">Entregada</option>
                </select>
            </label>
            <label for="desdeFecha" >
                Desde:
                <input name="desdeFecha" type="date" className=" casilla positionLabel" placeholder="fecha"/>
            </label>
            <label for="hastaFecha" >
                Hasta:
                <input name="hastaFecha" type="date" className=" casilla positionLabel"  placeholder="fecha"/>
            </label>
        </li>
    </ul>
    <ul>
        <li>
            <label for="cliente">
                Cliente:
                <input name="cliente" className=" casilla positionLabel"  placeholder="Ej: Daniel Pulido"/>
            </label>
            <label for="tipoId">
                Tipo ID:
                <select name="tipoId" className=" casilla positionLabel" >
                    <option value="0">Seleccione</option>
                    <option value="CC">Cédula de ciudadania</option>
                    <option value="CE">Cédula de Extranjeria</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="PA">Pasaporte</option>
                </select>
            </label>
            <label for="numeroDoc">
                No. ID:
                <input name="numeroDoc" type="number" step="7" className=" casilla positionLabel" placeholder="Ej: 9786566" />
            </label>
        </li>
    </ul>
    </container>
    );  
}

const Especifica = () => {
    return (
        <div>
           <ul>
        <li>
            <label for="cliente">
                Cliente:
                <input name="cliente" className=" casilla positionLabel"  placeholder="Ej: Daniel Pulido"/>
            </label>
            <label for="tipoId">
                Tipo ID:
                <select name="tipoId" className=" casilla positionLabel" >
                    <option value="0">Seleccione</option>
                    <option value="CC">Cédula de ciudadania</option>
                    <option value="CE">Cédula de Extranjeria</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="PA">Pasaporte</option>
                </select>
            </label>
            <label for="numeroDoc">
                No. ID:
                <input name="numeroDoc" type="number" step="7" className=" casilla positionLabel" placeholder="Ej: 9786566" />
            </label>
        </li>
    </ul>
        </div>
    );}

export {General, Especifica} ;

