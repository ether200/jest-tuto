export function callbackHell(callback) {
  callback("Hola Javascripters");
}

export function asyncFn(callback) {
  setTimeout(callback("Hola desarrolladores!"), 1000);
}
