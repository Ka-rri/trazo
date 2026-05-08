# Flujo de trabajo con Git para Trazo

## Introducción

Este documento describe el flujo de trabajo estándar para contribuir al proyecto Trazo usando Git.

## Estructura de ramas

- `main` - Rama principal y estable. Contiene la versión en producción.
- `dev` - Rama de desarrollo. Integración de features antes de pasar a main.
- `feat/*` - Ramas para nuevas funcionalidades (ej: `feat/convergence-checker`)
- `fix/*` - Ramas para corrección de errores (ej: `fix/newton-bug`)
- `docs/*` - Ramas para documentación (ej: `docs/faq`)
- `test/*` - Ramas para pruebas (ej: `test/vitest-setup`)
- `chore/*` - Ramas para tareas de configuración (ej: `chore/github-actions-js`)

## Flujo de trabajo paso a paso

### 1. Mantener el fork actualizado

```bash
git checkout main
git pull upstream main
git push origin main
