# API de Funciones Matemáticas - Trazo

## Métodos de Sistemas Lineales

| Función | Parámetros | Retorno | Ejemplo |
|--------|-----------|--------|--------|
| gauss(matriz, vector) | matriz: number[][], vector: number[] | number[] | gauss(A, b) |
| gaussJordan(matriz, vector) | matriz: number[][], vector: number[] | number[] | gaussJordan(A, b) |
| jacobi(matriz, vector, tol, iter) | matriz, vector, tolerancia, iteraciones | number[] | jacobi(A, b, 0.001, 100) |

---

## Métodos No Lineales

| Función | Parámetros | Retorno | Ejemplo |
|--------|-----------|--------|--------|
| biseccion(f, a, b, tol) | función, intervalo, tolerancia | number | biseccion(f, 0, 2, 0.001) |
| newtonRaphson(f, df, x0, tol) | función, derivada, valor inicial | number | newtonRaphson(f, df, 1, 0.001) |
| secante(f, x0, x1, tol) | función, valores iniciales | number | secante(f, 1, 2, 0.001) |

---

## Interpolación

| Función | Parámetros | Retorno | Ejemplo |
|--------|-----------|--------|--------|
| lagrange(x, y, valor) | puntos x, puntos y, valor | number | lagrange([1,2], [3,4], 1.5) |

---

## Integración

| Función | Parámetros | Retorno | Ejemplo |
|--------|-----------|--------|--------|
| trapecio(f, a, b, n) | función, intervalo, subdivisiones | number | trapecio(f, 0, 1, 10) |
| simpson(f, a, b, n) | función, intervalo, subdivisiones | number | simpson(f, 0, 1, 10) |
