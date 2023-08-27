# Los atributos id en HTML como parte de la API pública de las páginas web

Va a ser un tanto desafiante escribir el epígrafe de este artículo. Ustedes leen
el epígrafe, inmediatamente después del título, pero antes del contenido del
artículo; y es lo natural, ya que se encuentran visibles en la página principal
de mi blog.

Sin embargo, debido a mi [proceso de publicación](https://github.com/iyaki/iyaki.github.io/tree/main/poster),
yo los agrego después de haber terminado de escribir el contenido del artículo.

Lo particular, en esta ocasión, es que, el título es bastante explícito. Podría
terminar este post ahora mismo y, probablemente, solo con el título sería
suficiente para que muchos sepan a qué me estoy refiriendo. Por lo que, ahora
mismo, no se me ocurre epígrafe alguno que no resulte redundante o aburrido.

## ¿API pública de las páginas web?

Dejando de lado la cuestión del epígrafe, voy a comenzar explicando a que me
refiero por **API pública de las páginas web**. Y para esto, primero, voy a
ahondar, brevemente, en a que **no** me estoy refiriendo al hablar de API.

A efectos de este artículo, API no está funcionando como sinónimo de “servicio
web que recibe y responde JSON” (Deliberadamente no voy a emplear el término
REST para evitar entrar en [debates](https://htmx.org/essays/how-did-rest-come-to-mean-the-opposite-of-rest/)),
ni de “RPC sobre HTTP”. Tampoco me refiero a la API de un SDK o framework.

Esta vez, utilizaremos el concepto más genérico que hay de API, es decir, la
interfaz que utilizan 2 piezas de software para comunicarse.

Armados con esta definición, procederemos a considerar el URI de una página web
como su principal API, ya que es la forma que tiene de que los navegadores web
accedan a ella. Bien porque un usuario escribe un URI en la barra de navegación
o bien porque es redirigido desde otra página web mediante el uso de
[hipervínculos](https://es.wikipedia.org/wiki/Hiperenlace) (a.k.a. links).

## Conociendo un poco mejor los URI

Los URI, o [Identificadores de Recursos Uniformes](https://es.wikipedia.org/wiki/Identificador_de_recursos_uniforme),
son cadenas de texto que identifican un recurso (en este caso, una página web)
en la [web](https://es.wikipedia.org/wiki/World_Wide_Web).

Se conforman de múltiples partes, siendo una de ellas (y en la que nos
centraremos) el *fragmento*.

![Partes de un URI](/images/posts/URI_syntax_diagram_es.png)

En un URI, el fragmento es la parte que sigue al signo de numeral (#) y su
función es identificar una sección especifica dentro de la página web.

Es lo que los navegadores utilizan, junto con los hipervínculos, para “saltar”
(y también “deslizarse”, gracias a la continua evolución de CSS y la propiedad
*[scroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)*)
a una sección dentro de una misma página web (No confundir con hipervínculos que
llevan a otra [página](https://es.wikipedia.org/wiki/P%C3%A1gina_web) dentro del
mismo [sitio web](https://es.wikipedia.org/wiki/Sitio_web)).

Es un comportamiento que todo hemos visto y usado alguna vez al navegar por la
web, pero cuyo funcionamiento interno es fácil ignorar o pasar por alto mientras
desarrollamos páginas web.

## ¿Y los atributos id que pintan en todo esto?

El mecanismo que emplean los navegadores para brindar esta funcionalidad de
navegar entre secciones es extremadamente simple y ubicuo. Cuando creamos una
página web, tenemos la opción de asignar identificadores únicos a elementos
específicos mediante el atributo *id*.

El simple hecho de agregarle un atributo id a un elemento automáticamente lo
convierte en un punto de referencia dentro del URI de la página web y le permite
a los navegadores implementar su funcionalidad de “salto entre secciones”.

## Algunas conclusiones

Sabiendo que los atributos id de los elementos HTML cumplen un rol especial para
los navegadores web; se me ocurren dos corolarios, en forma de consejos a tener
en cuneta a la hora de desarrollar páginas web.

El primero sería evitar el uso del atributo id para otros fines, cómo podría ser
el agregado de estilos mediante CSS. Extendiendo esta idea, y alineados con las
directivas de [HTML semántico](https://www.freecodecamp.org/news/semantic-html5-elements/)
, podríamos considerar que el atributo id debe ser agregado únicamente en
elementos que representan secciones importantes o puntos de referencia dentro de
una página, o por los menos, los encabezados de estas secciones.

El segundo está relacionado con el versionado de API y es que sí, los atributos
id de nuestro HTML forman parte de la API de nuestra página web, eso significa
que eliminar un id, representa un cambio retroincompatible en la API de nuestra
web. Y como es sabido [Cool URIs don't change](https://www.w3.org/Provider/Style/URI).

Esto es todo por hoy, estimadísimos lectores. Ci vediamo.

*[HTTP]: HyperText Transfer Protocol
*[HTML]: Hyper Text Markup Language
*[CSS]: Cascading Style Sheets
*[JS]: Javascript
*[API]: Application Programming Interface
*[JSON]: JavaScript Object Notation
*[RPC]: Remote Procedure Call
*[SDK]: Software Development Kit
*[REST]: Representational State Transfer
*[URI]: Uniform Resource Identifier
*[a.k.a.]: also known as
