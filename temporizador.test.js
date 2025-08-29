// Importa la función 'ejecutarConRetraso' 
const ejecutarConRetraso = require('./temporizador');

jest.useFakeTimers();// Activa los temporizadores falsos de Jest, lo que permite controlar manualmente el tiempo
test('ejecuta callback después de 2 segundos', () => {
const callback = jest.fn(); // Crea un "mock function" (función simulada) para rastrear si es llamada y con qué argumentos

ejecutarConRetraso(callback);
// Todavía no ha pasado el tiempo
expect(callback).not.toHaveBeenCalled(); // Verifica que el callback NO se haya llamado inmediatamente 
jest.advanceTimersByTime(2000); // Simula el avance del tiempo en 2 segundos. Esto activa el 'setTimeout'
expect(callback).toHaveBeenCalledWith('¡Ejecutado!');  // Verifica que ahora el callback SÍ haya sido llamado con el mensaje esperado
});