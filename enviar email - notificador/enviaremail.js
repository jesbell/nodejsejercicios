function enviarEmail(destinatario, mensaje) {
  // Simula enviar un email (en producción llamaría a un servicio real)
  console.log(`Enviando email a ${destinatario}: ${mensaje}`);
  return true;
}


module.exports = enviarEmail;