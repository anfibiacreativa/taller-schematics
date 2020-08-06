---
title: Interactuar con el Schematic
description: 'Los prompts nos permiten interactuar a través del CLI '
published: true
index: 14
slugs: escribir-schematics-prompts
---

# Lección 14 - Escribir prompts para schematics

## Prompts

 Se entiende como `prompt` a un mensaje que insta al usuario a reaccionar de alguna manera. 

 Para lograr una mejor interacción con el usuario, podemos extender la validación de las opciones o agumentos, a través de x-prompts

 ## X-Prompts

 Los X-prompts tienen su propio esquema de validación y dos formas: la corta (short-form) y la larga (long-form).

 La última establece un árbol sintáctico (AST) mucho más complejo. 

 La corta, nos permite crear opciones de manera mucho más simple, sin escribir y anidar, tanto elementos.

 ## Tarea

 Haz check-out de la branch `feature/leccion14`, y analiza los cambios en el schema.json

 Ahora corre 

 ```$ npm run build```

 para compilar los cambios. Corre el schematic con

 ```$ schematics .:mi-schematic-paisa```

 Sigue los prompts de la consola.

 ## Tarea

 1. Escribe tu propio x-prompt en tu schematic. 
  