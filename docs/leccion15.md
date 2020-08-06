---
title: Ejecutemos el Schematic desde nuestra app
description: 'Los schematics son realmente potentes herramientas de flujo de trabajo, para modificar nuestro workspace. ¡Veamoslo!'
published: true
index: 15
slugs: ejecutemos-nuestro-schematic
---

# Lección 15 - Ejecutar nuestro schematic desde una applicación Angular

## Creemos la aplicación

 Para eso vamos a necesitar una aplicación Angular. Creemosla con el CLI, ejecutando Schematics, con 

```$  ng new [appName]```

No debemos olvidar de compilar el paquete de nuestro schematic para que transpilen los cambios, con

```$ npm run build```

Además  debemos enlazar el módulo de npm, para poder ejecutarlo en el workspace de la aplicación. 

```$ npm link```
[Más documentación](https://docs.npmjs.com/cli/link)

Recordemos que esto es un truco para poder ejecutarlo en local, sin publicar el módulo.En la vida real, probablmente usemos

```$ ng add [moduleName]```

Eejecutemos nuestro schematic con el comando

```$ ng generate collection:factory```

en nuestro caso

```$ ng generate miSchematicPaisa:miSchematicCustom```

## Tarea

1. Revisa los artefactos generados