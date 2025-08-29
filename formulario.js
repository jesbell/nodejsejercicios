function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function manejarEnvioFormulario(form, mostrarError) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[name="email"]').value;
    if (!validarEmail(email)) {
      mostrarError('Email inválido');
    } else {
      mostrarError(''); // Sin error
    }
  });
}

module.exports = { validarEmail, manejarEnvioFormulario};