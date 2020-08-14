---
title: Publiquemos nuestra librería
description: 'Las librerías son útiles cuando se quiere hacer una utilidad accessible a otros, o para instalar facilmente'
published: true
index: 17
slugs: publicar-librerias-en-npm-schematics-ng-add
---

# Lección 17 - Publicar una librería

## ¿Qué es una librería?

 La pregunta debería ser, qué califica cómo librería? Cualquier codigo complejo y reutilizable, tiene potencialmente carácter de librería. 

 Es deseable poder empaquetarlo y reutilizarlo, no solo en un proyecto concreto, sino a través de proyectos de una misma organización o incluso como artefactos de distribución, ya sea propietarios o de código abierto.

 A lo mejor piensas que una librería tiene que ser un framework o un producto, pero no es así. Hay muchas utilidades que te puede venir bien subir a un nivel más alto de abtracción, para reutilizar con más facilidad.

 ## Repasemos conocimientos de npm

 npm como su nombre lo indica, es un gestor de paquetes o modulos node desde una infrastructura para alojar artefactos de 3eros, de manera versionada, e instalarlos y ejecutarlos de manera local

 Para poder utilizarlo en nuestro desarrollo, debemos tener instalado su CLI en nuestro sistema. El mismo nos permite correr comando para, precisamente, instalar, ejecutar, actualizar, etc, los paquetes en nuestro ordenador

 ## Versionado semántico

 Los paquetes node se versionan, lo que permiten a los desarrolladores continuar trabajando en ellos y lanzar nuevas versiones, sin `romper` los proyectos existentes que les utilizan. 

 Para publicar librerías, es preciso estar familiarizados con el concepto de versionando semantico.

 Podrás encontrar más información, [en este enlace](https://semver.org/lang/es/)

 ## Escribamos la librería
 
Pues la librería ya la hemos escrito! Es nuestro schematic para normalizar estructuras y reubicar los imports de estilos! Pero recuerda que solo hemos podido ejecutarla en un proyecto Angular, porque habiamos realizado un enlace (symlink) a nivel local

Ahora, la vamos a publicar. Pero para ello Debemos adaptarla un poco, agregando soporte para `ng add``

## Pasos

1. Crea una nueva app con
```ng new ng-add-lib``` 
(No le agregues router y elige SCSS como preprocesador de estilos)

2. Al mismo nivel de `src` crea una carpeta `lib` y otra `schematics`

3. Dentro de `lib` genera un módulo corriendo `ng generate module entry`. Es simplemente para tener una entrada a la librería. También crea un fichero llamado `public_api.ts`, tal como establece la convención para librerías de Angular. Exporta el módulo a ese fichero, como se ve [aquí](https://github.com/anfibiacreativa/ng-add-lib/blob/develop/lib/public_api.ts)

4. Instala las siguientes dependencias: `ng packagr` y `cpr`. La primera es una utlidad que nos facilitará el empaquetado. La segunda nos ayudará a copiar el código a la carpeta de distribución.

5. Ahora copia los schematics `agregar-alias` y `actualizar-configuracion`, desde el schematics tal como está en la rama `feature/leccion16-reconfigurar`.

6. Haz checkout de `develop` para este [repo](https://github.com/anfibiacreativa/ng-add-lib)

7. Debemos actualizar la collection.json, tal y como se ve [aquí](https://github.com/anfibiacreativa/ng-add-lib/blob/develop/schematics/src/collection.json)

8. Por último, vamos a asegurarnos de actualizar el [package.json](https://github.com/anfibiacreativa/ng-add-lib/blob/develop/package.json). Los cambios importantes son:

- la propiedad `schematics`, que apunta a la colección
- la propiedad `ngPackage` que sirve a `ngPackagr`para saber tanto el destino de la distro como el fichero de entrada a la librería
- fijate en los scripts: ahora tenemos unos scripts nuevos para instalar y compilar los schematics, así como para copiar el código transpilado, a la distro
- la configuración para la compilación del typescript de los schematics, debe indicar tanto el directorio de entrada, como en el de salida, (`rootDir` and `outDir`)



9. Ahora crearemos un schematic nuevo en nuestra colección, al que llamaremos `ng-add`. Como puedes ver [aqui](https://github.com/anfibiacreativa/ng-add-lib/blob/develop/schematics/src/ng-add/index.ts), lo que hacemos es crear una función de instalación, y luego la encadenamos al schematic que reconfigura la applicación

La función de instalación implementa 

```import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';```

la función de instalación de node para paquetes, en el contexto

```context.addTask(new NodePackageInstallTask());```

Eso es lo mínimo que hay que hacer, para tener soporte para `ng-add`.

También podemos definir qué tipo de dependencia será nuestra librería, configurando la opción `save` en la propiedad `ng-add` en el package.json, con estos posibles valores

- false,  no se agrega al package.json
- true or "dependencies",  agrega el paquete a las dependencies
- "devDependencies" - agrega el paquete a las devDependencies


10. Primero haremos un `npm install`a nivel de los schematics, y luego nos iremos a la raíz de la librería, y ejecutaremos `npm run build:lib`, lo que debería hacer un build de los schematics y empaquetar la librería.

Si no hay errores, ya estamos listos para irnos a una app de prueba y correr 

```ng add ../ng-add-lib/dist/lib```

🌟🌟🌟🌟🌟🌟🌟

Básicamente al ejecutar `ng-add`, el CLI buscará una factoria con ese nombre, para proceder a la instalación de ese paquete.

Además ejecutará todo el código correspondiente del schematic (o los schematics), generando los artefactos necesarios, a la vez que instala dependencias.

## Publiquemos la librería

Para publicar la librería, necesitas una cuenta `npm`. Era un prerequisito de este taller. 

Identificate y empezemos.

Primero debes remover la propiedad 

``` "private": true,```
del package.json

Además vamos a hacer la release de la versión 0.0.1, por lo tanto, debemos cambiarla.

```npm version 0.0.1```

En segundo lugar, le vamos a dar un scope. En mi caso, yo he cambiado el nombre de la librería a

`@anfibiacreativa/learn-add-schematics`

Ahora vamos a publicar con

`npm publish --access public`

### .npmignore file

A tener muy en cuenta es la configuración de .npmignore para el paquete de schematics, ya que los javascripts deben subirse al paquete!

También ten en cuenta que `npm` pasará por alto tus reglas de `.gitignore` si encuentra un `.npmignore`, así que si no quieres publicar miles de ficheros, agrega `node_modules` a tu `.npmignore`

[.npmignore](https://github.com/anfibiacreativa/ng-add-lib/blob/develop/schematics/.npmignore)

🌟🌟🌟🌟🌟🌟🌟

## Instalemos la librería

Una vez publicada, tu librería estará disponible en el repositorio público de npm para instalar con `ng add`

### Una nota sobre scoping

Los paquetes actuales muchas veces están sujetos a un scope y a un registro, sobre todo los de organizaciones privadas. Puedes apreder sobre scoping y registries, [en este enlace](https://docs.npmjs.com/about-scopes) y [este enlace](https://docs.npmjs.com/using-npm/registry.html)

## ¡Escribe tu propia librería!

Este taller ha llegado a su fin, pero ahora te corresponde poner a prueba los conocimientos adquiridos, para ganar práctica.

Recuerda que es muy importante practicar. Es la mejor manera de consolidar conocimientos y ganar experiencia!

Espero que te haya gustado el taller.

Puedes contactar conmigo en

[Twitter - Anfibiacreativa](https://www.twitter.com/anfibiacreativa)

[Github - Anfibiacreativa](https://www.github.com/anfibiacreativa)

o por email [mail:to](nataliafrontend@gmail.com)