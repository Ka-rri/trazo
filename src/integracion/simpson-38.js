export function simpson38({ f, a, b, n = 99 }) {
  if (n % 3 !== 0) {
    throw new Error("n debe ser múltiplo de 3");
  }

  const h = (b - a) / n;

  let sumaNoMultiplos3 = 0;
  let sumaMultiplos3 = 0;
  let iteraciones = 0;

  for (let i = 1; i < n; i++) {
    const x = a + i * h;

    if (i % 3 === 0) {
      sumaMultiplos3 += f(x);
    } else {
      sumaNoMultiplos3 += f(x);
    }

    iteraciones++;
  }

  const resultado =
    (3 * h / 8) *
    (
      f(a) +
      3 * sumaNoMultiplos3 +
      2 * sumaMultiplos3 +
      f(b)
    );

  return {
    resultado,
    iteraciones
  };
}