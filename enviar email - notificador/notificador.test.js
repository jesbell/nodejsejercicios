const notificarUsuario = require('./notificador');
const enviarEmail = require('./enviaremail');


jest.mock('./enviaremail'); // Crea un mock automático


test('lanza error si usuario no tiene email', () => {
    // Espera que la función lance un error si el usuario no tiene email
  expect(() => notificarUsuario({ nombre: 'Ana' })).toThrow('Usuario sin email');
});


test('llama a enviarEmail con email y mensaje', () => {
  const usuario = { email: 'ana@example.com' };
  
  notificarUsuario(usuario);


  expect(enviarEmail).toHaveBeenCalled();  // Verifica que enviarEmail fue llamado
  // Verifica que enviarEmail fue llamado con los argumentos correctos
  expect(enviarEmail).toHaveBeenCalledWith('ana@example.com', '¡Tienes una notificación!');
});
