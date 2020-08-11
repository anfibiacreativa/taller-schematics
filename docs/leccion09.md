---
title: Schematics en el Angular CLI
description: 'Démosle un vistazo a los schematics que usamos a diario en el CLI'
published: true
index: 9
slugs: CLI-schematics-add-generate-update
---

# Lección 9 - Schematics en el CLI

## ng add

```ng add <collection> [options]```

Le da soporte a librerías de terceros, dentro de un workspace. 

Lo que hacemos al correrlo, es agregar el paquete de la librería al package.json de nuestro workspace, además de cualquier dependencia o polyfill de la librería en si

Además de tomar el nombre de la colección, como argumento, toma una serie de opciones que se pasan como flags, siendo una de las más importantes, el 

`--registry=registry` 

que nos permite pasar un registro alternativo al paquete

[Más documentación](https://angular.io/cli/add) 


## ng generate

```ng generate <schematic> [options]```

Este comando genera ficheros o modifica el workspace, basado en el schematic que se le pase.

La lista de posibles schematics o colecciones es

- appShell
- application
- class
- component
- directive
- enum
- guard
- interceptor
- interface
- library
- module
- pipe
- service
- serviceWorker
- webWorker

Así como `ng add`, también admite opciones, siendo a destacar `--dry-run` que habilita y desabilita el modo depuración

Más [documentación](https://angular.io/cli/generate)

## ng update

```ng update [options]```

Este comando permite ejecutar una actualización de la versión de un paquete, incluyendo sus dependencias

`ng update` permite que se le pasen opciones, incluyendo obviamente el nombre del paquete, y la posibilidad de realizar una migración, sin actualizar las versiones

Más [documentación](https://angular.io/cli/update)