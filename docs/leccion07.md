---
title: La API de Schematics
description: 'Profundicemos en la API de Schematics'
published: true
index: 7
slugs: API-schematics
---

# Lección 7 - La API de Schematics

Además de las aciones, la API de Schematics nos provee de una gran cantidad de métodos y utilidades, para modificar o transformar nuestro workspace de Angular.

Vamos a ver estos métodos de manera práctica durante los ejercicios, pero entendamos su teoría.

## Métodos para leer el file system

Estos métodos se ejecutan en el árbol real, no el virtual. Nos permiten iterar y obtener información sobre ficheros existentes

## getDir()

Este método nos permite obtener un directorio en el workspace o host

<script src="https://gist.github.com/anfibiacreativa/618a63bbdd7d72ee66e4a3f233dd563c.js"></script>

## get()

Nos permite tener acceso a un fichero del workspace.

## visit()

Nos permite recorrer el árbol y visitar cada archivo para leerlo, modificarlo, etc

<script src="https://gist.github.com/anfibiacreativa/8b277616bfc5a7b37e51491a42a4af2b.js"></script>

## read()

Nos permite leer el contenido de fichero en el workspace. Nos devuelve un Buffer del mismo.

<script src="https://gist.github.com/anfibiacreativa/d51da84a73a3f58a882e91119adfcdde.js"></script>

## Métodos para transformar el árbol

### apply()

El método apply() nos permite aplicar multiples reglas (rules) a una base, y nos devuelve esa base transformada.

### url()

El método url() lee la base en sistema de archivos, de forma relativa al schematic que se ejecuta

### applyTemplates() | template()

El método applyTemplates() toma como argumentos los métodos que quieras pasar al schematic, y los nombres de los ficheros que componen el schematic y devuelve un `Rule`. 

Si quieres implementar utilidades de cadena como classify() o dasherize(), lo harás a través de estos dos métodos

### move()

El método move() mueve la base de archivos a su destino final, cuando se ejecuta el schematic

<script src="https://gist.github.com/anfibiacreativa/3d99fea8e095fce247ebc47b7c43dd2a.js"></script>

### noop()

Este método significa `no operation` y por supuesto, sirve para indicar que no se realizará ninguna operación

## Utilidades de cadena (templates)

Las utilidades de cadena nos ayudan a normalizar definiciones y a imponer convenciones. Por ejemplo, cuando trabajamos en equipos grandes y queremos que los componentes, modulos, etc, digan un patrón en su nombrado.

Lo mejor de estas utilidades es que están disponibles en los templates directamente, sin importar nada (aunque si debemos importarlas a la lógica en el RuleFactory). 

Se pueden incluso encadenar sin limite de esta manera al crear estructuras de scaffold

`__name@dasherize__`

donde `__` actuan como delimitador por defecto, y `@` indica que concatenaremos métodos

### dasherize()

Este método toma un valor de cadena y nos devuelve el mismo valor con guiones y en minúsculas. (kebab-case)

Por ejemplo si le pasaramos `NgConfCo`, nos devolvería `ng-conf-co`

### classify()

Este método toma un valor de cadena y nos devuelve el mismo valor con la primera letra en mayúscula y el resto en mínúscula (PascalCase).

Por ejemplo si le pasaramos `ng conf co` nos devolvería `NgConfCo`

### camelize()

Este método toma un valor de cadena y nos devuelve el mismo valor con la primera letra de la primera palabra en minúscula, la primera de las sucesivas palabras en mayúscula y el resto en mínúscula (camelCase).

Por ejemplo si le pasaramos `ng conf co` nos devolvería `ngConfCo`

### decamelize() 

Este método reemplaza espacios, guiones bajos o camelCase, con guiones

Por ejemplo si le pasaramos `ngConfCo`, nos devolvería `ng-conf-co`

### underscore()

Este método toma un valor de cadena y nos devuelve el mismo valor con guiones bajos y en minúsculas. (snake-case)

Por ejemplo si le pasaramos `ng conf co` nos devolvería `ng_conf_co`

# Sintaxis de templates

Schematics también nos permite implementar la sintaxis de templates de manera muy flexible, por ejemplo:

<script src="https://gist.github.com/anfibiacreativa/498f96f98ee7c98bd8a25712051d9da8.js"></script>

Este código es parte de la implementación del schematic `service` del CLI. De esta manera, el servicio recible el nombre que se pasa como opción

Otro uso muy interesante de la sintaxis es directamente en los templates, lo que nos permite el  acceso a los metodos de utilidades de cadena, pero también a cualquier otra función custom que creemos, y que pasemos al método template, como se ve en el ejemplo

<script src="https://gist.github.com/anfibiacreativa/b47cfc3caffde60eb58b5ca7418c1bc0.js"></script>

## Logging

Un aspecto importante a la hora de desarrollar, pero también a la hora de ejecutar comandos a nivel usuario,  es la habilidad de obtener información o errores, también a través de la consola.

El contexto en el que se ejecuta Schematics ofrece un método de logger, para pasar mensajes a la consola, usando la interface LoggerApi, que se puede ver aquí 

[LoggerApi](node_modules/@angular-devkit/core/src/logger/logger.d.ts)

## Tratamiento de excepciones

Otro aspecto importante en las buenas prácticas de desarrollo, es el tratamiento de excepciones. 

Para eso también Schematics nos ofrece la utilidad `SchematicsExceptions`, que implementa la `BaseException` del core de Angular.

[BaseException](node_modules/@angular-devkit/core/src/exception/exception.d.ts)

