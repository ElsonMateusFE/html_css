"use strict";

function soma(a, b) {
  return a + b;
}
function somaValores() {
  for (var _len = arguments.length, valor = new Array(_len), _key = 0; _key < _len; _key++) {
    valor[_key] = arguments[_key];
  }
  console.log(valor);
}
function teste(valor) {
  if (valor > 10) {
    return 'Maior que 10';
  } else {
    return false;
  }
}