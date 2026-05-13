/**
 * Resolucion de sistemas de ecuaciones lineales Ax = b
 * mediante eliminacion gaussiana con sustitucion hacia atras.
 *
 * @param {Object} params
 * @param {number[][]} params.A - Matriz de coeficientes (n x n)
 * @param {number[]}   params.b - Vector de terminos independientes (n)
 * @returns {{ resultado: number[], iteraciones: Object[] }}
 */
function gauss({ A, b }) {
  const n = A.length;

  // Construir matriz aumentada [A|b]
  const M = A.map((fila, i) => [...fila, b[i]]);
  const iteraciones = [];

  // Eliminacion hacia adelante 
  for (let col = 0; col < n; col++) {
    const pivote = M[col][col];

    if (pivote === 0) {
      throw new Error(
        `Pivote nulo en la columna ${col}. El sistema no puede resolverse con este metodo sin pivoteo.`
      );
    }

    for (let fila = col + 1; fila < n; fila++) {
      const factor = M[fila][col] / pivote;

      for (let k = col; k <= n; k++) {
        M[fila][k] -= factor * M[col][k];
      }

      iteraciones.push({
        paso: `Eliminacion col=${col} fila=${fila}`,
        factor: factor,
        matriz: M.map((r) => [...r]),
      });
    }
  }

  // Sustitucion hacia atras 
  const x = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    let suma = 0;

    for (let j = i + 1; j < n; j++) {
      suma += M[i][j] * x[j];
    }

    x[i] = (M[i][n] - suma) / M[i][i];

    iteraciones.push({
      paso: `Sustitucion hacia atras x[${i}]`,
      valor: x[i],
    });
  }

  return { resultado: x, iteraciones };
}
export { gauss };