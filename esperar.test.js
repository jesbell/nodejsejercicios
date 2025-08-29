// Importa la función 'esperar' 
const esperar = require('./esperar');

test('espera 100ms sin errores', async () => {
await esperar(100); // Espera a que la función 'esperar' cumpla con 100 milisegundos
expect(true).toBeTruthy(); // Verifica que 'true' sea verdadero (siempre pasa, solo confirma que no hubo errores)
});