/**
 * @file newtonRaphson.js
 * @description Implementación del método de Newton-Raphson
 * usando derivada numérica.
 */

import { create, all } from "mathjs";

const math = create(all);

function newtonRaphson(expression, x0, tol = 0.001, maxIter = 100) {

  const f = (x) => math.evaluate(expression, { x });

  const derivative = (x) => {
    const h = 1e-6;
    return (f(x + h) - f(x - h)) / (2 * h);
  };

  let x = x0;
  let iterations = 0;
  let converged = false;

  const steps = [];

  while (iterations < maxIter) {

    const fx = f(x);

    if (Math.abs(fx) < tol) {
      converged = true;
      break;
    }

    const dfx = derivative(x);

    if (dfx === 0) {
  return {
    root: null,
    iterations,
    converged: false,
    steps,
  };

    }

    const xNext = x - (fx / dfx);

    steps.push({
      iteration: iterations + 1,
      x,
      fx,
      dfx,
      xNext,
      error: Math.abs(xNext - x),
    });

    x = xNext;
    iterations++;
  }

  return {
    root: x,
    iterations,
    converged,
    steps,
  };
}

export { newtonRaphson };