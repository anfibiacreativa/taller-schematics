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

Haz check-out de la rama `feature/leccion17` para ver cómo.

Básicamente al ejecutar `ng-add`, el CLI buscará una factria con ese nombre, para proceder a la instalación de ese paquete. Además ejecutará todo el código correspondiente, generando los artefactos necesarios, a la vez que instala dependencias.

## Publiquemos la librería

Para publicar la librería, necesitas una cuenta `npm`. Era un prerequisito de este taller. 

Identificate y empezemos.

## Instalemos la librería

Una vez publicada, tu librería estará disponible en el repositorio público de npm para instalar con `ng add``

### Una nota sobre scoping

Los paquetes actuales muchas veces están sujetos a un scope y a un registro, sobre todo los de organizaciones privadas. Puedes apreder sobre scoping y registries, [en este enlace](https://docs.npmjs.com/about-scopes) y [este enlace](https://docs.npmjs.com/using-npm/registry.html)

 ## ¡Escribe tu propia librería!

 Este taller ha llegado a su fin, pero ahora te corresponde poner a prueba los conocimientos adquiridos, para ganar práctica.

 Recuerda que es muy importante practicar. Es la mejor manera de consolidar conocimientos y ganar experiencia!

 Espero que te haya gustado el taller.

 Puedes contactar conmigo en

[Twitter - Anfibiacreativa](https://www.twitter.com/anfibiacreativa)

o por email [mail:to](nataliafrontend@gmail.com)