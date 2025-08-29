// Importa la función 'procesarCliente' y el módulo 'utils'
const procesarCliente = require('./cliente');
const utils = require('./utils');

test('saludar es llamado al procesar cliente', () => {
const spy = jest.spyOn(utils, 'saludar'); // Crea un "espía" (spy) sobre el método 'saludar' del objeto 'utils'. Esto permite rastrear si la función fue llamada, cuántas veces y con qué argumentos
procesarCliente('Luis'); // Esta función internamente debería llamar a 'utils.saludar(...)'
expect(spy).toHaveBeenCalled(); // Verifica que la función 'saludar' haya sido llamada al menos una vez
expect(spy).toHaveBeenCalledWith('Luis'); // Verifica que la función 'saludar' haya sido llamada con el argumento 'Luis'
spy.mockRestore();   // Restaura la función original 'saludar' después de la prueba para evitar efectos secundarios en otras pruebas que la puedan usar
});