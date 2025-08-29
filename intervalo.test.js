// Aquí estoy trayendo una función que está en otro archivo que se llama "intervalo.js"
// Esa función se llama "repetirCadaSegundo"
const repetirCadaSegundo = require('./intervalo');

// Esto hace que el reloj del programa sea falso, como de mentira
// Así puedo adelantar el tiempo sin tener que esperar de verdad
jest.useFakeTimers();

// Esto es una prueba para ver si la función funciona bien
test('llama callback cada segundo', () => {
  // Esto crea una función falsa para probar. No hace nada pero me dice si fue llamada o no
  const mock = jest.fn();

  // Aquí le digo a la función "repetirCadaSegundo" que use mi función falsa
  repetirCadaSegundo(mock);

  // Aquí reviso que todavía NO haya llamado a mi función falsa
  expect(mock).not.toHaveBeenCalled();

  // ¡Adelanto el tiempo 3 segundos! Pero solo en el reloj falso
  jest.advanceTimersByTime(3000); // 3 segundos simulados

  // Ahora reviso si la función fue llamada 3 veces (una vez por cada segundo)
  expect(mock).toHaveBeenCalledTimes(3);
});
