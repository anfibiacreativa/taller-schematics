---
title: La API de Schematics
description: 'Profundicemos en la API de Schematics'
published: true
index: 8
slugs: API-schematics
---

# Lección 8 - La API de Schematics (cont)

La API de Schematics también nos ofrece maneras de encadenar o combinar schematics, así como estrategias de mergeado de áboles (virtuales).

## Método para encadenar schematics

### chain()

Como se habrá podido deducir a partir del nombre, este método nos permite combinar multiples reglas, obteniendo una única regla, para así poder ejecutar varias operaciones, en el contexto de un único schematic.

### Estrategia de mergeado de árboles

Una de las analogías que suelo usar para enseñar Schematics, es la de GIT, ya que el concepto ofrece similitudes, que pueden ayudar a los desarrolladores, a entender la abtracción.

El árbol virtual donde se aplican las tranformaciones de los diferentes métodos de Schematics, se puede mergear con otros árboles y con la base de ficheros existentes.

### brandAndMerge()

El método branchAndMerge nos permite crear una rama del árbol para mergearla con otro

### mergeWith()

Este método permite mergear un árbol con otro ábol, después de aplicarle las transformaciones instruídas.

Hasta aquí algunos de los métodos a nuestra disposición, para operar con Schematics. 

Puedes volver a estas lecciones, cuando estés intentando resolver los ejercicios ;)

