---
title: Combinar schematics
description: 'Es posible combinar schematics, tanto custom como los que existen en el CLI '
published: true
index: 16
slugs: combinar-schematics-con-los-metodos-de-la-API
---

# Lección 16 - Combinar schematics

## Combinar schematics customizados

Una de las ventajas de Schematics, es que los schematics se pueden combinar o encadenar entre si. 

Esto supone que podemos escribir factorías una única vez, y combinarlas con otros schematics de diferentes maneras, ganando en tiempo y productividad

## Combinar schematics del CLI

¡También los schematics del cli, se pueden encadenar a los custom que escribamos!

Esto nos permite crear cadenas muy poderosas con código ya escrito y validado.

En el gist de ejemplo se ve como se encadenan 3 schematics. Nuestro schematic en blanco, con nuestro schematic avanzado, con el schematic externo para generar componentes, de Angular

<script src="https://gist.github.com/anfibiacreativa/b2bb69cb0bd34d95f0b328ef26b754a7.js"></script>

## Opciones compartidas entre schematics

Tienes que tener en cuenta que, si combinas o encadenas schematics, que usan las mismas opciones y estas son obligatorias o necesarias para ejecutar la lógica, las debes requerir en el primer schematic que se ejecuta

## Orden de ejecución

También debes tener en cuenta el orden de ejecución de los schematics encadenados

![Orden de ejecución de los schematics encadenados](https://res.cloudinary.com/anfibiacreativa/image/upload/v1597346712/taller-schematics/lifecycle_qz0rxi.jpg "Orden de ejecución de los schematics encadenados")

## Tarea 

Haz checkout de la rama `feature/leccion15-estilos` donde ya combinamos schematics para mejorar el resultado del de la lección anterior. 

1. Analiza los cambios del nuevo schematic

2. Escribe tu propia cadena de schematics usando un schematic externo de Angular. Ejecutalo.

3. Haz check-out de la rama `feature/leccion16`. Ejecuta el nuevo schematic siguiendo las instrucciones del readme
 