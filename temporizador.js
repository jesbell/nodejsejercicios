// Define una función llamada 'ejecutarConRetraso' que recibe un parámetro 'callback' (una función)
function ejecutarConRetraso(callback) {
setTimeout(() => {
callback('¡Ejecutado!');
}, 2000); // Programa la ejecución del 'callback' después de 2 segundos
}
module.exports = ejecutarConRetraso; // Exporta la función 'ejecutarConRetraso'