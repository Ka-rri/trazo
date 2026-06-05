import {
  validarNumero,
  validarFuncion,
  validarTolerancia,
} from "../../../src/utils/validaciones.js";

describe("validarNumero", () => {
  test("acepta un número válido", () => {
    expect(() => validarNumero(10, "x")).not.toThrow();
  });

  test("lanza error con texto", () => {
    expect(() => validarNumero("hola", "x")).toThrow();
  });
});

describe("validarFuncion", () => {
  test("acepta una función válida", () => {
    expect(() => validarFuncion(() => 5, "f")).not.toThrow();
  });

  test("lanza error cuando no es función", () => {
    expect(() => validarFuncion(10, "f")).toThrow();
  });

  test("lanza error con null", () => {
    expect(() => validarFuncion(null, "f")).toThrow();
  });

});

describe("validarTolerancia", () => {
  test("acepta tolerancia positiva", () => {
    expect(() => validarTolerancia(0.001)).not.toThrow();
  });

  test("lanza error con cero", () => {
    expect(() => validarTolerancia(0)).toThrow();
  });

  test("lanza error con número negativo", () => {
    expect(() => validarTolerancia(-1)).toThrow();
  });
});
