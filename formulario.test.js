const { validarEmail, manejarEnvioFormulario } = require('./formulario');

test('validarEmail acepta emails válidos', () => {
  expect(validarEmail('ejemplo@dominio.com')).toBe(true);
});

test('validarEmail rechaza emails inválidos', () => {
  expect(validarEmail('invalido.com')).toBe(false);
});

test('manejarEnvioFormulario muestra error para email inválido', () => {
  document.body.innerHTML = `
    <form id="form">
      <input type="text" name="email" value="invalido.com" />
      <button type="submit">Enviar</button>
    </form>
    <div id="error"></div>
  `;

  const form = document.getElementById('form');
  const errorDiv = document.getElementById('error');

  function mostrarError(msg) {
    errorDiv.textContent = msg;
  }

  manejarEnvioFormulario(form, mostrarError);

  form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true}));

  expect(errorDiv.textContent).toBe('Email inválido');
});