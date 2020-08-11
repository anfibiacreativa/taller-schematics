---
title: Vocabulario importante
description: 'Este es el vocabulario que tienes que aprender, antes de empezar'
published: true
index: 4
slugs: vocabulario-schematics
---

# Lección 4 - Vocabulario de Schematics

## ./files

(Tree o source), es el sistema de archivos VIRTUAL, compuesto de la base (los archivos que existen) y el area de staging (donde ocurren las transformaciones).

En realidad, cuando creamos archivos para ser copiados por nuesro schematic, creamos una carpeta `/files` en la raíz del schematic. La llamamos así porque el compilador ignora esa carpeta, pero podemos llamarla de cualquier manera, siempre y cuando reconfiguremos el compilador para que la ignore

## Rule{}

Define una función que toma como argumento un árbol y devuelve otro árbol (source o tree), después de aplicarle una serie de transformaciones

También puede devolver un Observable< Tree >

## index.ts

RuleFactory que actúa como función de entrada del schematic o grupo de reglas del schematic. Se encuentra a nivel raíz del schematic.

Corre en un contexto que provee metadata y utilidades.

Siempre devuelve un objeto Rule.

## SchematicContext

Objeto que representa el contexto mencionado anteriormente.

## Action

La transformación más atómica que se le puede hacer a un árbol

## collection.json

Conjunto de definiciones de uno o varios schematics, donde encontramos las declaraciones de valores para la descripción, la factoria (o punto de entrada del schematic), el enlace a su esquema de validación y sus aliases.

### Aliases

Los aliases son, como siempre en desarrollo, una cadena de texto alternativo (usualmente más corta y más fácil de recordar), para invocar la ejecución de un comando.

Cada schematic puede tener uno o varios aliases, que se declaran en la propiedad `aliases` del schema, en forma de arreglo 

```"aliases": [rico]````

## schema.json

Declaración del esquema de validación de nuestro schematic y sus descriptores

## options

Opciones de configuración que se pueden pasar a un schematic, por ejemplo --name

## prompts

Permiten al schematic interactuar con el usuario, para pedirle elegir opciones
