# Requerimientos del Proyecto - Trazo

## Requerimientos Funcionales

| ID | Descripción | Prioridad | Estado |
|---|---|---|---|
| RF-001 | Implementar el método de Bisección para hallar raíces en intervalos. | Alta | Pendiente |
| RF-002 | Implementar el método de Newton-Raphson mediante el uso de derivadas. | Alta | Pendiente |
| RF-003 | Implementar el método de la Secante para funciones de difícil derivación. | Media | Pendiente |
| RF-004 | Validar intervalos de entrada mediante el Teorema del Valor Intermedio. | Alta | Pendiente |
| RF-005 | Calcular y retornar el error relativo porcentual en cada iteración. | Alta | Pendiente |
| RF-006 | Generar una tabla de iteraciones detallada para cada cálculo realizado. | Media | Pendiente |
| RF-007 | Permitir la configuración manual de la tolerancia (épsilon) y el límite de iteraciones. | Baja | Pendiente |
| RF-008 | Exportar los resultados de las raíces halladas en formato JSON o CSV. | Media | Pendiente |

## Requerimientos No Funcionales

| ID | Descripción | Categoría | Estado |
|---|---|---|---|
| RNF-001 | El tiempo de cálculo para 100 iteraciones no debe exceder los 200ms. | Rendimiento | Pendiente |
| RNF-002 | El sistema debe manejar una precisión decimal de al menos $10^{-10}$. | Precisión | Pendiente |
| RNF-003 | El código debe estar documentado siguiendo el estándar de la comunidad. | Mantenibilidad | Pendiente |
| RNF-004 | La librería debe ser compatible con entornos Linux, Windows y MacOS. | Portabilidad | Pendiente |

## Requerimientos de Sistema

| ID | Descripción |
|---|---|
| RS-001 | Instalación previa de Python 3.10 o superior. |
| RS-002 | Librería NumPy instalada para el manejo de vectores y matrices. |
| RS-003 | Espacio mínimo en disco de 50MB para la instalación de la librería. |
| RS-004 | Procesador con soporte para operaciones de punto flotante de 64 bits. |