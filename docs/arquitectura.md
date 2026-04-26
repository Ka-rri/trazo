# Arquitectura del Sistema

## Visión general

**Trazo** es una librería de **métodos numéricos en JavaScript (ES6+)** diseñada para resolver problemas matemáticos mediante algoritmos de aproximación.
Su arquitectura es modular y extensible, lo que permite a estudiantes y profesionales importar únicamente los métodos que necesitan sin cargar toda la librería.

## Componentes principales

- **Sistemas de ecuaciones lineales:** Eliminación de Gauss, Gauss-Jordan, descomposición LU, Jacobi, Gauss-Seidel.

- **Sistemas de ecuaciones no lineales:** Bisección, secante, Newton-Raphson, falsa posición, punto fijo.

- **Interpolación:** Lagrange y Newton.

- **Integración numérica:** Regla del trapecio, Simpson (1/3 y 3/8), cuadratura de Gauss.  

- **Core (src/index.js):** Punto de entrada que exporta los métodos principales y coordina los módulos.

## Diagrama de arquitectura

Trazo (Core: index.js)
 ├── sistemas/
 │    ├── lineales/
 │    └── no-lineales/
 ├── interpolacion/
 └── integracion/  

Cada carpeta contiene implementaciones específicas y se expone mediante  `index.js` para facilitar la importación en proyectos externos.

## Tecnologías utilizadas

| Componente | Tecnología | Versión | Justificación |
|---|---|---|---|
| Núcleo | JavaScript (ES6+) | Más reciente | Lenguaje principal, estándar para librerías web y Node.js |
| Dependencias | npm | Más reciente | Distribución y gestión de paquetes |
| Matemáticas | Algoritmos propios | N/A | Implementeación didáctica de métodos numéricos |
| Documentación | Markdown | N/A | Claridad y trazabilidad en la explicación |

## Decisiones de diseño

### Decisión 1
**Contexto:**
**Decisión:**
**Consecuencias:**

## Flujo de datos