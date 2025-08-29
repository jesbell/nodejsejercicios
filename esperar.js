// Define una función llamada 'esperar' que recibe un parámetro 'ms' (milisegundos)
function esperar(ms) {
return new Promise((resolve) => setTimeout(resolve, ms)); // Usa 'setTimeout' para esperar 'ms' milisegundos y luego llama a 'resolve'
}

module.exports = esperar; //exporta función para ser utlizada en otros módulos

