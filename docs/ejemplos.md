# EJEMPLOS DE USO 

### 1. Sistema de Ecuaciones Lineas - Eliminacion de Gauss

**Problema Planteado**
Se tiene el siguiente sistema de tres ecuaciones con tres incógnitas:

2x + y  -  z =  8
-3x - y + 2z = -11
-2x + y + 2z = -3

Se desea encontrar los valores de "x", "y" y "z" que satisfacen el sistema de ecuaciones.

**¿Por que usar eliminacion de Gauss?**

El sistema de Gauss transforma el sistema en una matriz triangular superior mediante operaciones entre filas, y luego resuelve las incógnitas por sustitución regresiva. Es uno de los métodos más directos y confiables para sistemas lineales de tamaño pequeño o mediano.

**Parametros de entrada**

| Parametro | Descripcion | Valor de ejemplo |
|---|---|---|
| A | Matriz de coeficiente (n*n) | [[2, 1, -1], [-3, -1, 2], [-2, 1, 2]] |
| B | Vector de terminos independientes | [8, -11, -3] |

## Pseudocódigo:

función eliminacionGauss (A, b):
  Formar la matriz aumentada [A | b]
  Para cada columna pivote k de 0 hasta n-1:
    Para cada fila i debajo del pivote:
      factor = A[i][k] / A[k][k]
      Restar factor * fila_k de fila_i
  Resolver por sustitución regresiva
  Retornar vector de soluciones x

  **Resultado esperado**

       x = 2
       y = 3
       z = -1



### 2. Sistemas de Ecuaciones No Lineales — Método de Bisección 

**Problema Planteado**

Se quiere encontrar la raíz de la función:

f(x) = x^2 - 4

Es decir, el valor de x tal que f(x) = 0. 
Sabemos que la raíz está entre x = 0 y x = 3, ya que f(0) = -4 < 0 y f(3) = 5 > 0, lo que garantiza que existe al menos una raiz en ese intervalo (Teorema de Bolzano). 

**¿Por qué usar Bisección?**

El metodo de Biseccion devide repetivamente el intervalo a la mitad y descarta la la mitad que no contiene la raíz. Es simple, robusto y siempre converge si se cumplen las condiciones iniciales.


**Parametros de entrada**

| Parametro | Descripcion | Valor de ejemplo |
|---|---|---|
| f | Funcion a evaluar | f(x) = x^2 - 4 |
| a | Extremo izquiero del intervalo | 0 |
| b | Extremo derecho del intervao | 3 |
| Tolerancia | Error maximo aceptable | 0.001 |

## Pseudocódigo:

función biseccion(f, a, b, tolerancia):
  Mientras (b - a) / 2 > tolerancia:
    c = (a + b) / 2
    Si f(c) == 0: retornar c  ← raíz exacta
    Si f(a) y f(c) tienen signos opuestos:
      b = c
    Si no:
      a = c
  Retornar (a + b) / 2

 **Resultado esperado**

 Raiz aproximada: x = 2
 (La raiz exacta es x = 2 , ya que 2^ - 4 = 0)



### 3. Interpolación — Interpolación de Lagrange

**Problema Planteado**

Se tienen mediciones de temperatura en distintos momentos del día:

| Hora (x) | Temperatura °C (y) |
|----------|--------------------|
|    0     |         15         |
|    6     |         10         |
|    12    |         25         |
|    18    |         20         |

Se desea estimar la temperatura a las 9:00 am (x = 9), un momento del que no se tiene medición directa.

**¿Por que usar Interpolación de Lagrange?**

La Interpolación d e Lagrange construye un polinomio único que pasa exactamente por todos los puntos conocidos, permitiendo estimar valores intermedios de manera precisa sin necesidad de una fórmula analítica previa.

**Parametros de entrada**

| Parametro | Descripcion | Valor de ejemplo |
|---|---|---|
| x_puntos | Valores conocidos de x | [0, 6, 12, 18] |
| y_puntos | Valores conocidos de y | [15, 10, 25, 20] |
| x_estimar | Punto donde se quiere estimar | 9 |

## Pseudocódigo:

función lagrange(x_puntos, y_puntos, x_estimar):
  resultado = 0
  n = longitud de x_puntos
  Para cada i de 0 hasta n-1:
    termino = y_puntos[i]
    Para cada j de 0 hasta n-1 (j ≠ i):
      termino *= (x_estimar - x_puntos[j]) / (x_puntos[i] - x_puntos[j])
    resultado += termino
  Retornar resultado

 **Resultado esperado**

   Temperatura estimada a las 9:00 am = 19.375 °C



 ### 4. Integración Numérica — Regla del Trapecio    

**Problema Planteado**

Se desea calcular el área bajo la curva de la función:

f(x) = x^2

En el intervalo [0, 1]. El valor exacto de esta integral es 1/3 ≈ 0.3333.
Se usará la Regla del Trapecio con n = 4 subintervalos para obtener una aproximación numérica y comparar con el resultado exacto.

**¿Por qué usar la Regla del Trapecio?**

La Regla del Trapecio aproxima el área bajo la curva dividiendo el intervalo en subintervalos y calculando el área de trapecios en lugar de rectángulos. A mayor número de subintervalos (n), mayor precisión.

**Parametros de entrada**

| Parametro | Descripcion | Valor de ejemplo |
|---|---|---|
| f | Funcion a integrar | f(x) = x^2 |
| a | Limite inferior de la integracion | 0 |
| b | Limite superio de la integracion | 1 |
| n | Numero de sub-intervalos | 4 |

## Pseudocódigo:

función trapecio(f, a, b, n):
  h = (b - a) / n
  suma = f(a) + f(b)
  Para cada i de 1 hasta n-1:
    suma += 2 * f(a + i * h)
  Retornar (h / 2) * suma

 **Resultado esperado**

   Aproximacion con n = 4 : = 0.3438
   Valor exacto           : = 0.3333
   Error absoluto         : = 0.0104
   con n = 100 el error se reduce a = 0.000033

   Una nota importante para no olvidar seria que a medida que "n" aumenta, la aproximacion se acerca cada vez mas al valor exacto. Esto ilustra la convergencia del metodo. 