---
title: El árbol virtual
description: 'Conoce el árbol virtual de Schematics'
published: true
index: 5
slugs: arbol-virtual-schematics
---

# Lección 5 - El árbol virtual

## El árbol virtual

El árbol virtual es una abstracción del sistema de ficheros del proyecto a transformar.

Esta estructura de datos consiste de una base (un grupo de ficheros que existen realmente), y un staging area, que es una lista de transformaciones que se aplicaran a la base.

Cuando ejecutamos métodos de la API Tree, los ejecutamos siempre sobre el árbol virtual

## ¡Importante!

Es importante entender que las transformaciones aplicadas no modifican o cambian realmente la base. Solamente tienen efecto en el staging area.

Para entender este concepto, suelo referirme a otros métodos que todos los desarrolladores conocemos en mayor o menor medida. Los controles de versión. Las modificaciones que se realizan de manera local, no modifican realmente las ramas base, a menos que se efectúe un merge.

Por ejemplo, cuando creamos ficheros, la acción de crear físicamente los archivos se ejecuta siempre en el último lugar.

Es decir, ocurre así:


