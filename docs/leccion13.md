---
title: Validar nuestro  schematic
description: 'Vamos a aprender a escribir un schema.json, para validar nuestro schematic '
published: true
index: 13
slugs: validar-los-schematics-schema
---

# Lección 13 - Validar nuestro schematic

## schema.json

El schema.json, es un objeto json que establece un conjunto de elementos de validación del schemtic y sus propiedades.

Para cada propiedad a validar puedes definir un nombre, una descripción y valor por defecto, incluyendo su origen de entrada. En nuestro ejemplo, el mismo es el argumento vector (`argv`) en la posición establecida (empezando de 0).

Otras definiciones posibles son los "x-prompts" (los veremos más adelante en otra lección), y los "aliases". 

Se hace referencia al schema.json, mediante la propiedad "schema" para cada elemento de la colección, en `collection.json`

## Tipos

Los argumentos pueden tener todos los tipos `numbe`, `integer`, `string`, `boolean`, etc o incluso se puede definir un `enum` con su correspondiente sub-tipo

## Modelo o declaración

Una buena práctica a la hora de escribir schematics,  es declarar y exportar un modelo o `interface`. Si te has fijado, cuando se genera el schematic en blanco, las opciones tienen como tipo `any` . Eso es porque dependiendo de la implementación, el tipo que tendrán las opciones, y eso deberá declararlo el desarrollador, en función de la implementación.

Cuando hagas check-out del código de esta lección, fijate en los archivos `./mi-schematic-paisa/schema.json` y `paisaOptions.model.ts`

## Parámetros y opciones

Una de las utilidades de tener un schema de validación, es el asegurarnos que los valores pasados como opciones, realmente existen o se corresponden con las definiciones lógicas.

Podemos establecer la obligatoriedad de pasar ciertos parámetros al correr un schematic, utilizando el esquema de validación.

Por ejemplo, en el caso del nombre del fichero o path, de la lección 11.

## Aliases

Los aliases son, como siempre en desarrollo, una cadena de texto alternativo (usualmente más corta y más fácil de recordar), para invocar la ejecución de un comando.

Cada schematic puede tener uno o varios aliases, que se declaran en la propiedad `aliases` del schema, en forma de arreglo 

```"aliases": [rico]````


## Tarea 

1. Haz checkout de la rama `feature/leccion13`. No te olvides de correr `npm run build` para compilar los cambios.

Inspecciona los cambios en la factoria, a la vez que revisas el nuevo fichero, `schema.json`, la interfaz y la `collecion.json`

Ahora corre 

```$ schematics .:mi-schematic-paisa --path=medellin```

El mensaje `Debo mostrar este mensaje` no se ha impreso en la consola.

Ahora corre 

```$ schematics .:mi-schematic-paisa --path=medellin --message```

¿Qué ha cambiado?

2. Ahora corre 

```$ schematics .:mi-schematic-paisa --path=medellin --message --dry-run=false```

¡Oh no! ¡Un error en la consola! El fichero ya existe y no se puede ejecutar el schematic.

Escribe la excepción que se asegurará de que este error no ocurra en tu propio schematic. Si te bloqueas, pudes verlo haciendo check-out de la rama `feature/leccion13-exception`
