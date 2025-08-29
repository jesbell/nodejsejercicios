// Esta función se llama repetirCadaSegundo y recibe algo llamado "callback"
// Un "callback" es una función que alguien más te da para que tú la llames después
function repetirCadaSegundo(callback) {
  // Aquí uso setInterval para hacer que algo pase cada 1000 milisegundos (eso es 1 segundo)
  // Dentro de setInterval, pongo una función que llama al callback que me pasaron
  const id = setInterval(() => {
    callback(); // ¡Llamo a la función que me dieron!
  }, 1000); // Cada 1000 milisegundos = 1 segundo

  // Devuelvo el "id" del intervalo por si después lo quieren detener
  return id;
}

// Esto hace que pueda usar esta función en otros archivos
module.exports = repetirCadaSegundo;
