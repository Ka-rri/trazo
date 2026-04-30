# Arquitectura de la librería Trazo

## Visión general

**Trazo** es una librería de métodos numéricos en JavaScript (ES6+) diseñada para resolver problemas matemáticos mediante algoritmos de aproximación como integración, interpolación y resolución de sistemas de ecuaciones.

La arquitectura está organizada de forma modular, separando cada tipo de método en carpetas independientes dentro de `src/`. Esto permite mantener el código limpio, reutilizable y fácil de escalar.

Cada módulo cumple una responsabilidad específica, facilitando el mantenimiento del proyecto y permitiendo que los usuarios importen únicamente las funcionalidades que necesitan.

---

## Componentes principales

- **Sistemas de ecuaciones lineales:** Gauss, Gauss-Jordan, LU, Jacobi y Gauss-Seidel.
- **Sistemas no lineales:** Bisección, secante, Newton-Raphson, falsa posición.
- **Interpolación:** Lagrange y Newton.
- **Integración numérica:** Trapecio, Simpson, cuadratura de Gauss.
- **Core:** Punto de entrada (`index.js`) que organiza los módulos.

---

## Diagrama de arquitectura

```
trazo/
│
├── sistemas/
│   ├── lineales/
│   └── no-lineales/
├── interpolacion/
└── integracion/
```
---

## Tecnologías utilizadas

| Componente | Tecnología | Versión | Justificación |
|-----------|------------|--------|--------------|
| Núcleo | JavaScript | ES6+ | Lenguaje principal |
| Entorno | Node.js | 16+ | Ejecución del proyecto |
| Dependencias | npm | 8+ | Gestión de paquetes |

---

## Decisiones de diseño

### Decisión 1
**Contexto:** Se requiere modularidad.  
**Decisión:** Separar la librería en módulos independientes.  
**Consecuencias:** Facilita mantenimiento y escalabilidad.

### Decisión 2
**Contexto:** Facilidad de uso.  
**Decisión:** Exportar funciones desde `index.js`.  
**Consecuencias:** Uso sencillo en otros proyectos.

---

## Flujo de datos

1. El usuario importa un método desde la librería.
2. Define los parámetros necesarios.
3. El sistema ejecuta el algoritmo correspondiente.
4. Se retorna el resultado al usuario.
