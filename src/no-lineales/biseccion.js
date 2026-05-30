import { crearResultado } from "../core/contrato.js";
import { ErrorParametros } from "../core/errores.js";
import {
  validarFuncion,
  validarIntervalo,
  validarTolerancia,
  validarIteraciones,
} from "../utils/validaciones.js";

/**
 * Encuentra una raíz de f(x) = 0 en [a, b] usando el Método de Bisección.
 *
 * @param {Function} f                  - Función continua a evaluar.
 * @param {number}   a                  - Extremo izquierdo del intervalo.
 * @param {number}   b                  - Extremo derecho del intervalo.
 * @param {number}   [tolerancia=1e-6]  - Criterio de parada por error absoluto.
 * @param {number}   [maxIter=100]      - Número máximo de iteraciones.
 * @returns {Object} Resultado siguiendo el contrato de Trazo.
 * @throws {ErrorParametros} Si f(a) · f(b) >= 0.
 */
function biseccion({ f, a, b, tolerancia = 1e-6, maxIter = 100 }) {
  validarFuncion(f, "f");
  validarIntervalo(a, b);
  validarTolerancia(tolerancia);
  validarIteraciones(maxIter);

  if (f(a) * f(b) >= 0) {
    throw new ErrorParametros(
      `Trazo.biseccion: f(a) · f(b) >= 0. ` +
      `f(${a}) = ${f(a)}, f(${b}) = ${f(b)}. ` +
      `El intervalo [a, b] debe contener un cambio de signo.`
    );
  }

  let izq = a;
  let der = b;
  let c = izq;
  const iteraciones = [];
  let convergio = false;

  for (let n = 0; n < maxIter; n++) {
    c = (izq + der) / 2;

    const fa = f(izq);
    const fb = f(der);
    const fc = f(c);
    const error = Math.abs(der - izq) / 2;

    iteraciones.push({ n: n + 1, a: izq, b: der, c, fa, fb, fc, error });

    if (error < tolerancia) {
      convergio = true;
      break;
    }

    if (fa * fc < 0) {
      der = c;
    } else {
      izq = c;
    }
  }

  return crearResultado({
    resultado: c,
    iteraciones,
    convergio,
    mensaje: convergio
      ? `Convergió en ${iteraciones.length} iteraciones.`
      : `Se alcanzó el máximo de ${maxIter} iteraciones sin converger.`,
    meta: {
      metodo: "biseccion",
      parametros: { a, b, tolerancia, maxIter },
      tiempo_ms: 0,
    },
  });
}

export { biseccion };