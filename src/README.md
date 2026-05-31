# Estructura de la carpeta src

```bash
src/
├── core/
├── edo/
├── integracion/
├── interpolacion/
├── lineales/
├── no-lineales/
└── utils/
```

Este directorio contiene la implementación de distintos métodos numéricos organizados según la categoría del problema que resuelven.
---

## Descripción de Directorios

### `no-lineales/`

Métodos para resolver ecuaciones no lineales.

Ejemplos:

* Bisección
* Newton-Raphson
* Secante

---

### `lineales/`

Métodos para resolver sistemas de ecuaciones lineales.

Ejemplos:

* Gauss
* Gauss-Jordan
* Jacobi

---

### `integracion/`

Métodos de integración numérica.

Ejemplos:

* Regla del trapecio
* Simpson 1/3
* Simpson 3/8

---

### `interpolacion/`

Métodos de interpolación de datos.

Ejemplos:

* Lagrange
* Interpolación de Newton

---

### `edo/`

Métodos para resolver ecuaciones diferenciales ordinarias.

Ejemplos:

* Euler

---

### `utils/`

Funciones auxiliares reutilizables.

Ejemplos:

* Validaciones
* Formateo
* Convergencia

---

### `core/`

Componentes base y manejo de errores comunes para los métodos numéricos.
