import React from 'react';
import CrudVtas from 'components/Crudvtas';

const Vtas = () => {
    return (
        <div>
            <main>
          <section  className="mb-3" >
            <form >
              <ul>
                <li>
                  <label for="idvta">
                    Cód. Venta
                    <input name="idvta" className="casilla"  placeholder="Id de venta"/>
                  </label>
                  <label for="vendedor">
                    Vendedor
                    <input name="vendedor" className="casilla"  placeholder="Ingrese nombre"/>
                  </label>
                  <label for="idVendedor">
                    Cód. Vendedor
                    <input name="idVendedor" className="casilla"  placeholder="Identificación"/>
                  </label>
                </li>
              </ul>
              <ul>
                  <li >
                    <label for="estado">
                      Estado:
                      <select name="estado" className="casilla">
                        <option value="0">Seleccione</option>
                        <option value="En proceso">En proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                      </select>
                    </label>
                    <label for="desdeFecha" className="positionLabel">
                      Desde:
                      <input name="desdeFecha" type="date" className="casilla"  placeholder="fecha"/>
                    </label>
                    <label for="hastaFecha" className="positionLabel">
                      Hasta:
                      <input name="hastaFecha" type="date" className="casilla"  placeholder="fecha"/>
                    </label>
                  </li>
              </ul>
              <ul>
                <li>
                  <label for="cliente">
                    Cliente:
                    <input name="cliente" className="casilla"  placeholder="Ej: Daniel Pulido"/>
                  </label>
                  <label for="tipoId">
                    Tipo ID:
                    <select name="tipoId" className="casilla" >
                      <option value="0">Seleccione</option>
                      <option value="CC">Cédula de ciudadania</option>
                      <option value="CE">Cédula de Extranjeria</option>
                      <option value="TI">Tarjeta de Identidad</option>
                      <option value="PA">Pasaporte</option>
                    </select>
                  </label>
                  <label for="numeroDoc">
                    No. ID:
                    <input name="numeroDoc" type="number" step="7" className="casilla"  placeholder="Ej: 9786566" />
                  </label>
                </li>
              </ul>
            </form>
          </section>

          <CrudVtas />
  
        </main>
        </div>
    )
}

export default Vtas;