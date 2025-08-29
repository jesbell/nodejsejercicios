const sumarAsync = require('./sumarAsync');


test('suma dos números asíncronamente usando return', () => {
  // Jest espera que la promesa se resuelva para finalizar el test
  return sumarAsync(2, 3).then(resultado => {
    expect(resultado).toBe(5);
  });
});
