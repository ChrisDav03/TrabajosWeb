const reserva ={
    "0-0": false,
    "0-1": false,
    "0-2": false,
    "0-3": false,
    "1-0": false,
    "1-1": false,
    "1-2": false,
    "1-3": false,
    "2-0": false,
    "2-1": false,
    "2-2": false,
    "2-3": false,
  }
  const boton = document.getElementById("ejecutar");
  boton.addEventListener('click',procesarTodo())
function ProcesarTodo()  {
    let fila = document.getElementById("inputFila").value;
    let columna = document.getElementById("inputColumna").value;
    let nombre = document.getElementById("inputNombre").value;
    calcular(sillaReal)
    const sillaReal = fila +"-"+columna;
    document.getElementById("inputSillas").innerHTML = sillaReal
    const calcular = (sillaReal) => {

        if(reserva[sillaReal]){
            console.log("")
        } else {
          reserva[sillaReal] = true
          document.getElementById(`Silla${sillaReal}`).innerHTML = nombre
            console.log("sisas")
        }
    }


   
  }

export default procesarTodo;