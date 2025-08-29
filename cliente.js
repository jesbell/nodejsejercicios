// Importa el módulo 'utils' desde el archivo './utils.js'
const utils = require('./utils');

function procesarCliente(nombre) { // Define una función llamada 'procesarCliente' que recibe un parámetro 'nombre'
return utils.saludar(nombre).toUpperCase();  // Llama a la función 'saludar' del objeto 'utils' con el nombre proporcionado, y convierte el saludo a mayúsculas antes de devolverlo
}

module.exports = procesarCliente; // Exporta la función 'procesarCliente'