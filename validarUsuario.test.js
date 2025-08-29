const validarUsuario = require('./validarUsuario');


test('lanza error si falta nombre', () => {
    // Error si no hay nombre
  expect(() => validarUsuario({ email: 'test@example.com' })).toThrow('El nombre es obligatorio');
});


test('lanza error si falta email', () => {
     // Error si no hay email
  expect(() => validarUsuario({ name: 'Juan' })).toThrow('El email es obligatorio');
});


test('valida usuario correctamente', () => {
     //  Funcione correctamente si tiene 'nombre' y 'email'
  expect(validarUsuario({ name: 'Juan', email: 'juan@example.com' })).toBe(true);
});
