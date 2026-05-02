# 📘 Guía de Estilo JavaScript
## 🎯 Objetivo

Esta guía define convenciones para escribir código JavaScript limpio, consistente y mantenible, siguiendo las buenas prácticas.

## 🧾 1. Nombres de variables

- Usar `camelCase`.
- Los nombres deben ser descriptivos y claros.
-Usar nombres en inglés para mantener consistencia en el proyecto.

### ✅ Ejemplos:

```js
let userAge = 25;
const totalPrice = 100.5;
let isValid = true;
```

## ⚙️ 2. Nombres de funciones

- Usar `camelCase`.
- Deben representar acciones (verbos).
- Ser descriptivas.

### ✅ Ejemplos:

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}

function validateInput(input) {
  return input.length > 0;
}
```

## 📁 3. Nombres de archivos y módulos

- Usar `kebab-case`.
- Archivos en minúsculas.
- Evitar nombres genéricos como utils.js.
- Preferir `export` / `import` (ES Modules) en lugar de `require`.

### ✅ Ejemplos:
* Ejemplo de archivos.

```bash
user-service.js
payment-controller.js
auth-middleware.js
```

* Ejemplo de `export` y `import`.

```js
// Exportar
export const sum = (a, b) => a + b;

// Importar
import { sum } from './math-utils.js';
```
### 🎯 ¿Por qué esto es importante?

El uso de inglés en el código permite mayor consistencia, facilita la colaboración entre desarrolladores y sigue estándares internacionales.

## 📐 4. Indentación y formato

- Usar 2 espacios.
- No usar tabs.
- Máximo recomendado: 100 caracteres por línea.
- Siempre usar `{}` incluso en bloques de una línea.

### ✅ Ejemplo:

```js
if (isValid) {
  processData();
}
```

## 💬 5. Comentarios y documentación

- Explicar el por qué, no el qué.
- Usar `//` para comentarios simples.
- Usar JSDoc para documentar funciones (`/** ... */`).

### ✅ Ejemplo:

```js
// Evitamos dividir entre cero
if (value !== 0) {
  result = total / value;
}
```

## 🧠 6. Reglas importantes de funciones

- Mantener funciones pequeñas y simples.
- Evitar efectos secundarios.
- Usar `const` por defecto, `let` solo si cambia.
- Evitar funciones muy largas (> 40 líneas).
- Evitar completamente `var`.

## 🧩 7. Ejemplo de función bien documentada

```js
/**
 * Calcula el precio total de una compra
 *
 * @param {number} price - Precio unitario del producto
 * @param {number} quantity - Cantidad de productos
 * @returns {number} Precio total calculado
 */
const calculateTotal = (price, quantity) => {
  return price * quantity;
};
```

## 🚫 8. Buenas prácticas clave

- Usar `===` en lugar de `==`.
- Preferir funciones flecha (`=>`) para funciones anónimas.
- Usar funciones normales para métodos de objetos o clases.
- Evitar variables globales.
- Manejar errores con `try/catch`.
- Usar `destructuring` cuando sea posible.

> **¿Qué es destructuring?**
>
> Es una sintaxis de JavaScript (ES6) que permite extraer valores de objetos o arrays
> y asignarlos a variables de forma concisa, reduciendo código repetitivo.

- Usar comillas simples (`''`) en lugar de dobles (`""`).

> [!NOTE]
> Se pueden usar comillas dobles (`""`) cuando sea necesario,
> por ejemplo, para evitar escapar caracteres dentro de strings.


## 💻 9. Ejemplo completo

```js
/**
 * Verifica si hay stock disponible
 * @param {number} stock
 * @returns {boolean}
 */
const isAvailable = (stock) => {
  return stock > 0;
};

/**
 * Clase Producto
 */
class Product {
  constructor(price, stock) {
    this.price = price;
    this.stock = stock;
  }

  getPrice() {
    return this.price;
  }

  isAvailable() {
    return this.stock > 0;
  }
}

const product = new Product(10, 5);

const total = calculateTotal(product.getPrice(), 3);

if (product.isAvailable()) {
  console.log(`Total: ${total}`);
} else {
  console.log('No disponible');
}
```

> [!NOTE]
> Los ejemplos presentados son ilustrativos.
> No es necesario que el código sea exactamente igual,
> pero sí que respete las buenas prácticas descritas.

## 🔥 Conclusión rápida
- `camelCase` → variables y funciones
- `kebab-case` → archivos
- 2 espacios → indentación
- JSDoc → documentación
- `===` → comparaciones estrictas
- Consistencia > preferencias personales
-Código → Inglés (obligatorio)
