// Importamos la función que vamos a probar
const configurarElementoConEvento = require('./eventoPersonalizado');

// Este test revisa si la función callback se ejecuta cuando ocurre el evento personalizado
test('ejecuta callback cuando se dispara evento personalizado', () => {
  // Creamos un elemento <div> en la página
  const div = document.createElement('div');

  // Hacemos una función falsa (mock) para saber si se ejecuta
  const mockCallback = jest.fn();

  // Usamos nuestra función para decirle al div que escuche el evento y use la función falsa
  configurarElementoConEvento(div, mockCallback);

  // Creamos un evento llamado "eventoEspecial"
  const evento = new Event('eventoEspecial');

  // Disparamos el evento en el div
  div.dispatchEvent(evento);

  // Revisamos si la función falsa fue llamada
  expect(mockCallback).toHaveBeenCalled();
});