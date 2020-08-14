---
title: Ejecutemos el Schematic desde nuestra app
description: 'Los schematics son realmente potentes herramientas de flujo de trabajo, para modificar nuestro workspace. ¡Veamoslo!'
published: true
index: 12
slugs: ejecutemos-nuestro-schematic
---

# Lección 12 - Ejecutar nuestro schematic desde una applicación Angular

Hasta ahora hemos ejecutado nuestro schematic exclusivamente desde el schematics-CLI. Antes de agregar complejidad a nuestro código, vamos a aprender a ejecutarlo dedsde una aplicación Angular. Así podremos enfocarnos en esos aspectos.

## Creemos la aplicación

 Para eso vamos a necesitar una aplicación Angular. Creemosla con el CLI, ejecutando Schematics, con 

```$  ng new [appName]```

(Elegir no router y scss como preprocesador!)

No debemos olvidar de compilar el paquete de nuestro schematic para que transpilen los cambios, con

```$ npm run build```

Además  debemos enlazar el módulo de npm, para poder ejecutarlo en el workspace de la aplicación. 

```$ npm link```
[Más documentación](https://docs.npmjs.com/cli/link)

Recordemos que esto es un truco para poder ejecutarlo en local, sin publicar el módulo.En la vida real, probablmente usemos

```$ ng add [moduleName]```

Eejecutemos nuestro schematic con el comando

```$ ng generate collection:factory --options```

en nuestro caso

```$ ng generate mi-schematic-paisa:mi-schematic-paisa --path=medellin```

## Tarea

1. Revisa los artefactos generados
2. Haz check-out de la rama `feature/leccion12`. Mira la comprobación que se hace para verificar que estamos realmente en un workspace de Angular. ¡Te servirá más adelante para completar el ejercicio más importante del taller!

---