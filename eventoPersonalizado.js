// Esta función se llama "configurarElementoConEvento" y sirve para escuchar un evento especial en un elemento
function configurarElementoConEvento(elemento, callback) {
  // Aquí le decimos al elemento que cuando escuche un evento llamado "eventoEspecial", debe ejecutar la función callback
  elemento.addEventListener('eventoEspecial', callback);
}

// Exportamos la función para poder usarla en otras partes, como en los tests
module.exports = configurarElementoConEvento;