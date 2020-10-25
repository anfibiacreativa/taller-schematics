---
title: Taller de Schematics
description: 'De 0 a publicar tu propia librería, con Angular Schematics'
published: true
slug: taller-de-angular-schematics
---

# Aprende Schematics desde 0

## ¡Hola!

Mi nombre es Natalia Venditto. Soy Principal Software Engineer en [Netcentric](https://www.netcentric.biz). Además, soy [Google Developer Expert](https://developers.google.com/community/experts/directory/profile/profile-natalia_venditto) en Angular y Web Technologies.

### En este taller de Angular Schematics aprenderemos:

- Introducción Teoría a Schematics
  - Qué es Schematics
  - Para qué sirven?
  - Qué problemas resueven?

- Anatomia de un schematic
  - Vocabulario
  - El árbol virtual
  - Actions y Transformations

- La API Schematics
- Breve exploración de los Schematics en el Angular CLI
  - ng add
  - ng generate
  - ng update

- Creemos nuestro primer Schematic
  - Revisar los prerequisitos
  - Crear un blank schematic (hands-on!)
  - ¿Qué son las opciones?
  -¿Qué ocurre en el sistema de ficheros?

- Extendamos nuestro Schematic
  - Entendiendo Rule y Rule Factory
  - Collection
  - Pasar opciones avanzadas (hands-on!)
  - Debug mode

- Escribir un Schematics customizado
  - El problema
  - La solución
  - Escribir un schematics custom desde 0 (hand- on! Cada alumno intentará su solución)

- Resolver el problema juntos (hands-on!)

- Validar el Schematic
  - Schema.json
  - Tipos
  - Parámetros y opciones (hands-on!)

- Interactuar con el schematic
  - Pasar prompts (hands-on!)

- Publicar una librería
  - Breve reseña npm
  - ng add en profundidad
  - ¿Qué es una librería?
  - Publicar la librería
  - Instalar el Schematics


## Prerequisitos

Debés tener Angular con Angular CLI v.10  instalados en tu ordenador, de manera global.

También debes tener instalado node v.12.8.0 o superior, GIT, npm 

Además, debes tener una cuenta GitHub, y una cuenta npm. 

**Nota Importante:** no todas las versiones preferidas son obligatorias, pero son las que usaré para realizar los ejercicios. Para evitar problemas derivados de incompatibilidad de versiones, te recomiendo que uses las mismas.

Yo opero en un sistema macOS 10.15.4. Aunque me gustaría,para no interrumpir el flujo del taller, no podré resolver problemas derivados de especificidades de otros sistemas, como Linux o Windows, ni podré enseñarte otros conocimientos básicos de Typescript, bash, o node.

### ¡Adelante!

Empecemos por clonar este repositorio, para tenerlo pronto para trabajar!

[Schematics Paisa](https://github.com/anfibiacreativa/mi-schematic-paisa)

Este repo tiene varias feature branches, donde se va resolviendo cada ejercicio.

Te recomiendo que primero intentes hacerlo conmigo, y al final hagas checkout de la branch

<a name="cookies"><strong>Cookies</strong></a>

Aunque este sitio no implementa Analytics ni cookies de ningún tipo, es posible que los plugins de terceros usados, incluyendo los snippets de Github Gists, si lo hagan.

Para utilizar el sitio, por favor acepta las cookies.