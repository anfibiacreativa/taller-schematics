---
title: Ventajas de los Schematics 
description: 'Los Schematics tienen muchas ventajas, como ser extensibles, atómicos y asíncronos'
published: true
index: 3
slugs: ventajas-de-angular-schematics
---

# Lección 3 - Ventajas de los Schematics

## Principales ventajas de los schematics

Los Schematics como generadores de artefactos que ayudan a configurar un proyecto o workspace de Angular, de una manera automatizada y estandarizada, ofrecen muchas ventajas

### Extensibles y atómicos

Los schematics se organizan en colecciones y pueden combinarse pero ejecutan transformaciones de manera atómica

### Seguros y síncronos

Al ser atómicos, y por su naturaleza síncrona, los Schematics son seguros. Al ejecutarse uno tras otro, si ocurre un error, se podrá tracear exactamente dónde o en qué punto de la ejecución ocurre

### Debug mode por defecto

Los Schematics, cuando se ejecutan directamente desde el Schematics CLI, corren en modo dry-run por defecto, lo que implica que se pueden depurar de manera segura, sin transformar verdaderamente el proyecto Angular
