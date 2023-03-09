
import React, { useState } from 'react';

function ReservarSillas() {
  const [sillas, setSillas] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]);

  const seleccionarSilla = (fila, columna) => {
    const nuevasSillas = [...sillas];
    nuevasSillas[fila][columna] = !nuevasSillas[fila][columna];
    setSillas(nuevasSillas);
  };

  const reservarSilla = (e) => {
    e.preventDefault();
    const fila = parseInt(e.target.fila.value) - 1;
    const columna = parseInt(e.target.columna.value) - 1;
    seleccionarSilla(fila, columna);
  };

  return (
    <div>
      <h2>Reservar sillas de cine</h2>
      <form onSubmit={reservarSilla}>
        <label htmlFor="fila">Fila:</label>
        <input type="number" id="fila" name="fila" min="1" max="3" />
        <label htmlFor="columna">Columna:</label>
        <input type="number" id="columna" name="columna" min="1" max="3" />
        <button type="submit">Reservar silla</button>
      </form>
      <table>
        <tbody>
          {sillas.map((fila, i) => (
            <tr key={i}>
              {fila.map((silla, j) => (
                <td
                  key={j}
                  onClick={() => seleccionarSilla(i, j)}
                  style={{ backgroundColor: silla ? 'red' : 'green' }}
                >
                  {i + 1}-{j + 1}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservarSillas;
