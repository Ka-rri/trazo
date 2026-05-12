// METODO DE SIMPSON-13

function simpson13({ f, a, b, n = 100 }) {
 
  if (typeof f !== "function") {
    throw new TypeError(
      `Trazo.simpson13: 'f' debe ser una función. Se recibió: ${typeof f}`
    );
  }
 
  if (typeof a !== "number" || isNaN(a)) {
    throw new TypeError(
      `Trazo.simpson13: 'a' debe ser un número válido. Se recibió: ${a}`
    );
  }
 
  if (typeof b !== "number" || isNaN(b)) {
    throw new TypeError(
      `Trazo.simpson13: 'b' debe ser un número válido. Se recibió: ${b}`
    );
  }
 
  if (a >= b) {
    throw new Error(
      `Trazo.simpson13: el límite inferior 'a' (${a}) debe ser menor que el límite superior 'b' (${b}).`
    );
  }
 
  if (typeof n !== "number" || !Number.isInteger(n) || n < 2) {
    throw new TypeError(
      `Trazo.simpson13: 'n' debe ser un entero mayor o igual a 2. Se recibió: ${n}`
    );
  }
 
  if (n % 2 !== 0) {
    throw new Error(
      `Trazo.simpson13: 'n' debe ser un número par. Se recibió n = ${n}. ` +
      `Considera usar n = ${n + 1} o n = ${n - 1}.`
    );
  }
 
  const h = (b - a) / n;
  const iteraciones = [];
 
  for (let i = 0; i <= n; i++) {
    const xi = a + i * h;
    iteraciones.push(f(xi));
  }
 
  let suma = iteraciones[0] + iteraciones[n]; 
 
  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) {
      suma += 4 * iteraciones[i]; 
    } else {
      suma += 2 * iteraciones[i]; 
    }
  }
 
  const resultado = (h / 3) * suma;
 
  return {
    resultado,
    iteraciones,
  };
}
 
export { simpson13 };
 