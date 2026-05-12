// METODO DE JACOBI

function jacobi({ A, b, x0, tolerancia = 1e-6, maxIter = 100 }) {
 
  if (!Array.isArray(A) || !A.every(Array.isArray)) {
    throw new TypeError("Trazo.jacobi: 'A' debe ser una matriz (array de arrays).");
  }
 
  const n = A.length;
 
  if (A.some((fila) => fila.length !== n)) {
    throw new TypeError(`Trazo.jacobi: 'A' debe ser una matriz cuadrada (${n}×${n}).`);
  }
 
  if (!Array.isArray(b) || b.length !== n) {
    throw new TypeError(`Trazo.jacobi: 'b' debe ser un array de longitud ${n}.`);
  }
 
  if (!Array.isArray(x0) || x0.length !== n) {
    throw new TypeError(`Trazo.jacobi: 'x0' debe ser un array de longitud ${n}.`);
  }
 
  if (typeof tolerancia !== "number" || tolerancia <= 0) {
    throw new TypeError("Trazo.jacobi: 'tolerancia' debe ser un número positivo.");
  }
 
  if (typeof maxIter !== "number" || maxIter < 1 || !Number.isInteger(maxIter)) {
    throw new TypeError("Trazo.jacobi: 'maxIter' debe ser un entero mayor a 0.");
  }
 
 
  for (let i = 0; i < n; i++) {
    if (A[i][i] === 0) {
      throw new Error(
        `Trazo.jacobi: el elemento diagonal A[${i}][${i}] es cero. ` +
        `El método de Jacobi no puede aplicarse. ` +
        `Considera reordenar las filas para que la diagonal sea no nula.`
      );
    }
  }
 
  let x        = [...x0];         
  const iteraciones = [];          
  let convergio = false;
 
  for (let iter = 0; iter < maxIter; iter++) {
    const xNuevo = new Array(n).fill(0);
 
    for (let i = 0; i < n; i++) {
      let suma = 0;
      for (let j = 0; j < n; j++) {
        if (j !== i) {
          suma += A[i][j] * x[j];   
        }
      }
      xNuevo[i] = (b[i] - suma) / A[i][i];
    }
 
    iteraciones.push([...xNuevo]);
 
    const normaError = Math.sqrt(
      xNuevo.reduce((acum, val, i) => acum + (val - x[i]) ** 2, 0)
    );
 
    x = xNuevo;
 
    if (normaError < tolerancia) {
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
 
export { jacobi };