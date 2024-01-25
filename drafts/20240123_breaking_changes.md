# Breaking Changes

Si utilizan RSS para seguir los artículos que escribo en mi blog personal, es
posible que a fines del 2023 se hayan encontrado con [este post](https://iyaki.ar/posts/20231217_cambios_en_feeds_rss/)
en el que comento algunos cambios importantes sobre mis feeds RSS, que acompañan
la migración de mi sitio web a [eleventy](https://www.11ty.dev/).

Hoy vengo a contar un poco sobre como estoy gestionando estos cambios en las
URIs de las distintas páginas de mi website, siempre con el objetivo de mantener
la mayor retrocompatibilidad posible, evitando así breaking changes.

Al migrar a eleventy decidí hacer caso a los consejos de
[Cool URIs don't change](https://www.w3.org/Provider/Style/URI) y eliminar la
extensión `.html` de las URIs de mis páginas (el cual es ademas el comportamiento
predeterminado de eleventy). Inmediatamente, comencé a buscar una manera de
mantener las antiguas URIs funcionando.

Como soy una persona de bien, que respeta el protocolo HTTP, mi primera
intención fue configurar redirecciones
([301 - Moved Permanently](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301))
para que todas las direcciones antiguas redirigiesen de forma automática a las
nuevas y el cambio en las URIs fuese explícito y visible para los visitantes de
mi web. Esta era la opción más adecuada, pero, al parecer,
[Github Pages](https://pages.github.com/) (hosting que utilizo para mi website)
no tiene soporte para configurar redirecciones más allá del clásico
[404 - Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404).

Fue entonces cuando revisando los directorios y archivos de mi sitio descubrí
cuál sería la primera solución que implementaría: No hacer nada. ¿Nada?
¡Sí, eso mismo!

El proceso de deploy de este sitio es extremadamente simple, se basa en copiar
archivos de un directorio a otro. Y como todos los archivos que eleventy había
generado, tenían rutas distintas a los originales, la primera solución resultó
ser seguir sirviendo los antiguos archivos en sus URIs originales, teniendo así
duplicados de muchas de mis páginas.

Esto servía para salir del paso, pero no me terminaba que convencer como
solución, ya que, más pronto que tarde, estos duplicados comenzarían a diferir
en contenido, generando inconsistencias. Entonces, me embarqué en la búsqueda de
una solución más elegante y sostenible, la cual aún no encuentro.

Pero esto no significa que no haya mejorado la solución original.

Actualmente, he cambiado las copias de las páginas por enlaces simbólicos. Los
enlaces simbólicos me permiten mantener una única versión de cada página en mi
estructura de directorios, pero siguen siendo accesibles mediante sus antiguas
URIs. Esto solo resuelve el problema de la consistencia, ya que el cambio en las
URIs sigue sin hacerse visible para los visitantes. Otro problema que todavía
mantiene esta solución es el de la canonicidad de las páginas, al haber
múltiples URIs para un mismo contenido, los motores de búsqueda como Google no
saben cuál deberían sugerir en los resultados porque sus bots no tienen manera
de saber que una de las direcciones corresponde a un enlace simbólico.

Este problema con los motores de búsqueda, de momento, lo estoy resolviendo,
incluyendo, en todas las páginas, tags HTML del estilo:
`<link rel="canonical" href="https://iyaki.ar/blog/">` lo que,
[según Google](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=es)
debería resolver el problema.

Aún no termino de decidir si eventualmente debería dar de baja las direcciones
antiguas de manera definitiva (Opción tentadora para simplificar el
mantenimiento, sobre todo teniendo en cuenta que esta web es bastante joven y
las posibilidades de que haya enlaces de terceros a sus páginas aún son muy bajos)
es por esto que, de manera cautelar, he agregado en la
[página de 404](https://iyaki.ar/404.html) un script JS del
[Internet Archive](https://archive.org/) que permite recomendar automáticamente
páginas web guardadas con anterioridad en su base de datos en caso de no existir
la dirección solicitada.

Además, aprovechando esta posibilidad que me brinda
[WayBack Machine](https://web.archive.org/) del Internet Archive, para
asegurarme de que mis posts y páginas queden almacenados, en el Github Action
que se encarga de realizar las publicaciones agregué
[una sección](https://github.com/iyaki/iyaki.github.io/blob/main/.github/workflows/publish.yml#L21)
para respaldar automáticamente el contenido de mi sitio web mediante la API REST
que exponen.

Esto es todo por ahora, si tengo novedades sobre esta migración, sus ventajas y
desafíos los verán en mis posts.

Au revoir!
