const enviarEmail = require('./enviaremail');


function notificarUsuario(usuario) {
    // Verifica si el objeto de usuario tiene una propiedad de email.
  if (!usuario.email) {
    // Si no hay email lanza un error porque no se puede enviar una notificación
    throw new Error('Usuario sin email');
  }
  const mensaje = '¡Tienes una notificación!';
  return enviarEmail(usuario.email, mensaje);
}


module.exports = notificarUsuario;
