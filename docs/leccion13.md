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

No solo puedes darle un nombre, una descripción, sino definir como se cargan (por ejemplo como argumento vector (`argv`) en el CLI) y su posición (empezando de 0), y además, su tipo

## Tipos

Los argumentos pueden tener todos los tipos primitivos o incluso se puede definir un arreglo de subtipos, para los mismos

## Parámetros y opciones

Una de las utilidades de tener un schema de validación, es el asegurarnos que los valores pasados como opciones, realmente existen o se corresponden con las definiciones lógicas.

Podemos establecer la obligatoriedad de pasar ciertos parámetros al correr un schematic, utilizando el esquema de validación.

Por ejemplo, en el caso del nombre del fichero o path, de la lección 11.

## Tarea 

Haz checkout de la rama `feature/leccion13`. No te olvides de correr `npm run build` para compilar los cambios.

Inspecciona los cambios en la factoria, a la vez que revisas el nuevo fichero, `schema.json`

Ahora corre 

```$ schematics .:mi-schematic-paisa --path=medellin```

El mensaje `Debo mostrar este mensaje` no se ha impreso en la consola.

Ahora corre 

```$ schematics .:mi-schematic-paisa --path=medellin --message```

¿Qué ha cambiado?


 