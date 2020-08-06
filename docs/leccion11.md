---
title: Extender nuestro schematic
description: 'Ahora que ya tenemos un schematic generado, ¡vamos a extenderlo!'
published: true
index: 11
slugs: extender-un-schematic-blank
---

# Lección 11 - Extender el schematic blank

## Entendamos Rule y RuleFactory

Ahora que hemos visto un schematics generado, podemos echar un vistazo más a fondo a la función principal del paquete. 

<script src="https://gist.github.com/anfibiacreativa/3f300a9b2522e63794415ae7328b67bc.js"></script>

## Revisemos la `collection`

También debemos familiarizarnos con el concepto de `collection` o colección, ya que establece todas las definiciones de schematics de nuestro paquete

<script src="https://gist.github.com/anfibiacreativa/04c98a68a8b70bc6caf0fdc09e01793a.js"></script>

Prestemos atención a las propiedades, y a como se establece la factoría como punto de acceso de ese schematic de la colección

## Pasemos más opciones

Esta es una buena manera de entender todas las utilidades para cadenas de texto que nos ofrece Schematics, asi como también las utilidades de ruta (path) para los nombres de ubicación del fichero como recurso, como normalize()

📌 Haz `check out` de la rama `feature/leccion11`, para ver el código

https://github.com/anfibiacreativa/mi-schematic-paisa/compare/feature/leccion11?expand=1

## ¿Qué es el modo debug?

Ahora que tenemos un schematic un poco más sofisticado, es hora de verlo en acción.

Primero que nada debemos compilar y transpilar  nuestro typescript, así que vamos a ejecutar

```$ npm run build```

Ahora, vamos a ejecutarlo con el schematics-cli, en la raiz de nuestro schematic, con

```$ schematics .:my-schematic-paisa```

¿Qué ha pasado? ¡Nada ha cambiado! 

No teman. Es porque Schematic se ejecuta en modo dry-run, o sea, en modo depuración y por lo tanto, no realiza modificaciones en el sistema de archivos

Vamos a desactivar ese modo, ejecutando

```$ schematics .:my-schematic-paisa --dry-run=false```

¡Ahora si! ¡Felicitaciones! ¡Has escrito y ejecutado tu primer schematic!
