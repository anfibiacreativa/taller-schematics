---
title: Escribir nuestro schematic customizado
description: '¡Ya es hora de escribir un schematic para resolver un problema concreto! '
published: true
index: 15
slugs: resolviendo-problemas-de-la-vida-real-con-schematics
---

# Lección 15 - Nuestro primer schematic customizado

## Planteemos un problema

A la hora de crear un proyecto, me gusta que la estructura esté bien organizada. Me gusta separar los artefactos por tipo, en carpetas dedicadas. Así, prefiero que todos los componentes se organicen en una carpeta de `componentes`, los servicios en una de `servicios`, y así sucesivamente.

Pero es una tarea tediosa y consume mucho tiempo, si la hacemos manualmente. Ni que decir que si trabajamos en equipos grandes y remotos, seguro que alguien creará un montón de archivos fuera de una carpeta organizadora.

Otro problema es cómo nombramos las carpetas. A mi me gusta que se escriba todo en minuscula, para ajustarme a mis convenciones de BEM (¡tengo una fuerte opinión al respecto!)

## Definamos la solución

Podemos solucionar este problema con Schematics. A la hora de empezar un proyecto, podemos correr un schematic que nos cree la estructura, ¡y problema solucionado!


## Manos a la obra con nuestro schematic

Recuerden que lo primero que debemos hacer, es comprobar que verdaderamente estamos en un proyecto Angular, ya que si no, no debería ejecutarse el Schematic.

En segundo lugar, debemos generar el nuevo schematic para modificar. No hace falta que creemos un nuevo proyecto Schematics, simplemente corramos

```$ schematics blank --name=crear-estructuras``` a nivel raiz de nuestro schematic existente.

¡Observen cómo se ha actualizado la colección!

## Diagrama de ejecución del schematic

Observen este flujo de ejecución. Así es como se ejecuta el schematic al generar ficheros.

Esto les ayudará a intentar resolver el problema solos, aunque lo resolveremos juntos más tarde.

Pueden también volver a las lecciones 7 y 8, para refrescar la memoria en cuanto a la API disponible

### Recuerden lo que tienen que lograr

- Tenemos que crear una estructura estandarizada para todos nuestros proyectos
- Esta estructura debe generarse en src/app/{name}
- Debemos utlizar al menos una de los metodos de cadenas de template y la sintaxis de template en uno de los templates
- Debemos implementar la estrategia de mergeado

A partir de aquí les propongo intentar solucionar el problema solos.

¡Luego, lo resolveremos juntos!


## Tarea

Una vez hayamos terminado de resolver el ejercicio juntos, puedes hacer check-out de la rama `feature/leccion15`, para examinar el código.

Compara con tu solución, o si no lo habías logrado, apunta tus preguntas.
