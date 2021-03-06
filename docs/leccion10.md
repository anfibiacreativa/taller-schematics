---
title: Nuestro primer schematic blank
description: '¡Ahora si! ¡Creemos nuestro primer blank schematic!'
published: true
index: 10
slugs: crear-un-schematic-en-blanco
---

# Lección 10 - Crear nuestro primer schematic blank


## Revisemos los prerequisitos

Para comenzar, vamos a asegurarnos que nuestro setup está en orden.

Vamos a comprobar que tenemos instaladas las siguientes dependencias, a nivel global

- node v12.8.0
- npm v.6.10.2
- @angular-cli (core y cli) v.10
- @schematics/angular
- @schematics/schematics@0.1000.5

## Generemos el blank schematic con el Schematic CLI

Ahora vamos a ejecutar la creación de nuestro primer schematics en blanco. Para ello abriremos la terminal, y escribiremos

```$ schematics blank --name=mi-schematic-paisa```

Inmediatamente después haremos un 

```npm install && npm run build```

## ¿Qué son las opciones?

Las opciones son aquellos parametros que pasamos al schematic cuando lo ejecutamos.

Por supuesto, deben tener una lógica que los respalde y utilice los valores pasados.

En este caso, --name es una opción. Indica que el nombre de nuestro schematic es el que hayamos definido (en este caso miSchematicPaisa)

## ¿Qué ocurrió en nuestro sistema?

Busquemos en la carpeta donde ejecutamos el schematic.

Podemos ver que tenemos un nuevo paquete npm, con el nombre del schematic creado

![Paquete schematic blank](https://res.cloudinary.com/anfibiacreativa/image/upload/v1597347769/taller-schematics/contenidopaquete_udaeaw.jpg "paquete schematic blank")

### Tarea

Inspecciona y familirizate con el contenido de la carpeta. 

1. ¿Qué elementos que hemos visto durante la parte teorica, reconoces?

2. Abre el index.ts, o el rule factory del schematic, y familiarizate con el código.
