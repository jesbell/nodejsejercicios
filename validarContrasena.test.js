const validarContrasena = require('./validarContrasena');

test('Contraseña valida', () =>{
    expect(validarContrasena('abcd112345')).toBeTruthy();
});

test('Contraseña muy corta', () =>{
    expect(validarContrasena('ab1')).toBeFalsy();
});

test('Contraseña sin numero', () =>{
    expect(validarContrasena('abcd')).toBeFalsy();
});