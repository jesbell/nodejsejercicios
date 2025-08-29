function validarUsuario(user) {
  if (!user.name) {
    throw new Error('El nombre es obligatorio');
  }
  if (!user.email) {
    throw new Error('El email es obligatorio');
  }
  return true;
}


module.exports = validarUsuario;
