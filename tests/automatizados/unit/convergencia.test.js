const {
  checkConvergence,
  ConvergenceHistory
} = require("../../../../src/utils/convergence");

describe("checkConvergence", () => {
  test("retorna converged=true cuando error < tolerancia", () => {
    const resultado = checkConvergence(1.001, 1.000, 0.01);

    expect(resultado.converged).toBe(true);
  });

  test("retorna converged=false cuando error >= tolerancia", () => {
    const resultado = checkConvergence(1.1, 1.0, 0.01);

    expect(resultado.converged).toBe(false);
  });

  test("tolerancia <= 0 lanza error", () => {
    expect(() => checkConvergence(1.0, 1.0, 0)).toThrow();
  });
});

describe("ConvergenceHistory", () => {
  test("secuencia convergente retorna converged=true", () => {
    const history = new ConvergenceHistory();

    history.addValue(1.0);
    history.addValue(1.001);

    const resultado = history.checkLastTwo(0.01);

    expect(resultado.converged).toBe(true);
  });

  test("menos de dos valores retorna converged=false", () => {
    const history = new ConvergenceHistory();

    history.addValue(1.0);

    const resultado = history.checkLastTwo(0.01);

    expect(resultado.converged).toBe(false);
  });
});
