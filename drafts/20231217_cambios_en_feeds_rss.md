# Efectos colaterales de la migración a eleventy

## TL;DR

Hay nuevos feeds RSS para mi website (tanto para el recopilador de contenidos
curados, como para mis posts).

Las nuevas URI son:

- [Recopilador de contenidos curados: `/curated/feed.xml`](https://iyaki.ar/curated/feed.xml).
- [Posts: `/posts/feed.xml`](https://iyaki.ar/posts/feed.xml).

Los feeds anteriores (`/curated-rss.xml` y `posts/rss.xml`) en poco tiempo
dejarán de funcionar.

## El post, posta

Si siguen mis posts ya lo sabrán, y si no, se estarán enterando ahora; hace
algún tiempo comencé a migrar mi sitio web [iyaki.ar](https://iyaki.ar) para
generarlo utilizando [eleventy](https://www.11ty.dev/).

Esta migración trajo consigo varios cambios positivos; me ayudo a simplificar
bastante mi proceso de publicación de artículos y me ha dado nuevas herramientas
con las que seguir mejorando este sitio.

Una de estas mejoras tiene que ver con el manejo de las URI, particularmente de
su path.

Eleventy, por defecto, evita incluir la extensión de los archivos HTML como
parte de la ruta. Para esto genera directorios con los nombres de los archivos
y, dentro de estos, genera un `index.html`. Este es un patrón bastante común y
estándar en la world wide web. Eleventy no obliga a utilizar este patrón pero
[sus argumentos a favor](https://www.11ty.dev/docs/permalinks/#cool-uris-dont-change)
(que en realidad son los de [Cool URIs don't change](https://www.w3.org/Provider/Style/URI.html.en))
me convencieron, a pesar de que eso significara, en lo inmediato, cambiar las
URI de mi web 😱 (pronto publicaré un post sobre como evitar que estos cambios
sean un problema).

A decir verdad, siempre preferí el patrón de múltiples `index.html` por brindar
una mucho mejor experiencia para los usuarios finales (ustedes); pero al
sopesarlo contra las desventajas que traía para la experiencia del desarrollador
(yo) termine inclinándome por tener cada archivo con su nombre correspondiente
(lo sé, muy egoísta de mi parte).  
Ahora, con eleventy, sin ninguna configuración adicional, si un directorio y un
archivo comparten el nombre (ignorando la extensión), automágicamente [^1],
pasan al patrón de: `/nombre/index.html`.

[^1]: En lo que a mí respecta, todos los derechos de este término están
reservados para Julian Fariña.

## Me fui un poco por las ramas

Lo importante, es que casos que antes resolvía de maneras un tanto extrañas como
`/rss-curated.xml` ahora pueden resolverse de manera más natural
(`/curated/feed.xml`) y decidí adoptar esta nueva posibilidad, por lo que los
feeds de mi website sufrirán los siguientes cambios:

- El feed que se encontraba en `/curated-rss.xml` pasara a ubicarse en
  [`/curated/feed.xml`](https://iyaki.ar/curated/feed.xml).
- El feed que se encontraba en `/posts/rss.xml` pasara a ubicarse en
  [`/posts/feed.xml`](https://iyaki.ar/posts/feed.xml).

Ahora mismo cualquiera de las cuatro opciones es válida y devolverá el feed
correspondiente, pero mi intención es poder dar de baja `/curated-rss.xml` y
`/posts/rss.xml` dentro de poco.

Para seguir suscriptos a [mis artículos](https://iyaki.ar/blog) o a las entradas
del [recopilador de contenidos curados](https://iyaki.ar/curated), agreguen los
nuevos feeds en sus agregadores de noticias.

Respecto al cambio del término “RSS” por “feed” en los nombres de los archivos,
lo hice para no acoplarlos a ninguna tecnología específica y poder cambiar su
contenido o la forma en que son generados sin causar confusiones. De hecho,
creo que ya no son más RSS “puro” sino que, actualmente, son
[feeds atom](https://wikipedia.org/wiki/Atom_(web_standard)), pero que esto no
los preocupe, la mayoría de los programas y servicios son compatibles con ambos
formatos. Y dado que los feeds ya se encuentran actualizados, si llegaron hasta
este post significa que su agregador de noticias es compatible.

Eso es todo por ahora, espero poder subir pronto un nuevo post contando algunas
novedades y nuevas experiencias que tuve los últimos días al continuar avanzando
con la migración de mi web.

Por so no vuelvo a publicar nada en lo que queda del 2023, ¡Felices fiestas!
