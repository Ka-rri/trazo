// METODO DE NEWTON-RAPHSON

function newtonRaphson({ f, df, x0, tolerancia = 1e-6, maxIter = 100 }) {
 
  if (typeof f !== "function") {
    throw new TypeError(
      `Trazo.newtonRaphson: 'f' debe ser una función. Se recibió: ${typeof f}`
    );
  }
 
  if (typeof df !== "function") {
    throw new TypeError(
      `Trazo.newtonRaphson: 'df' debe ser una función (la derivada de f). Se recibió: ${typeof df}`
    );
  }
 
  if (typeof x0 !== "number" || isNaN(x0)) {
    throw new TypeError(
      `Trazo.newtonRaphson: 'x0' debe ser un número válido. Se recibió: ${x0}`
    );
  }
 
  if (typeof tolerancia !== "number" || tolerancia <= 0) {
    throw new TypeError(
      "Trazo.newtonRaphson: 'tolerancia' debe ser un número positivo."
    );
  }
 
  if (typeof maxIter !== "number" || maxIter < 1 || !Number.isInteger(maxIter)) {
    throw new TypeError(
      "Trazo.newtonRaphson: 'maxIter' debe ser un entero mayor a 0."
    );
  }
 
 
  let x = x0;
  const iteraciones = [];
  let convergio = false;
 
  for (let iter = 0; iter < maxIter; iter++) {
    const fx  = f(x);
    const dfx = df(x);
 
    if (dfx === 0) {
      throw new Error(
        `Trazo.newtonRaphson: la derivada df(x) es cero en x = ${x} ` +
        `(iteración ${iter + 1}). El método no puede continuar. ` +
        `Considera elegir un punto inicial x0 diferente.`
      );
    }
 
    x = x - fx / dfx;
    iteraciones.push(x);
 
    if (Math.abs(f(x)) < tolerancia) {
      convergio = true;
      break;
    }
  }
 
  return {
    resultado: x,
    iteraciones,
    convergio,
  };
}
 
export { newtonRaphson };