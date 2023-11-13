# Habemus RSS

Sí, gente, ayer me dio un ataque de inspiración que me permitió, finalmente, agregar feeds RSS, tanto a mi blog, como al recopilador de contenidos curados.

Si están leyendo esto, supongo que ya saben lo que es RSS, pero, solo por las dudas, vamos a hacer un breve repaso.

*[RSS]: Really Simple Syndication

Dejando de lado los aspectos técnicos, RSS es un estándar para publicar noticias y artículos en un formato preestablecido que puede ser comprendido por software diseñado para este fin (conocido comúnmente como RSS aggregators, o clientes RSS). El objetivo de RSS es que una persona pueda “suscribirse” a múltiples feeds para, luego, mediante un único software poder consumir de manera centralizada toda esa información (y no tener que estar paseando por todo internet para leer los posts que uno quiere).

Su uso es realmente simple y aunque su popularidad ha disminuido bastante en los últimos años, aun la mayoría de blogs o páginas web dedicadas a compartir contenido cuentan con un feed RSS.

![Logo RSS, no confundir con el icono del WiFi](/images/posts/rss-logo.png)

## Implementación técnica

La forma por la que me decanté para crear los feeds RSS es bastante simple aunque poco convencional.

Cómo todo lo alojado en [iyaki.ar](https://iyaki.ar) es solo contenido estático subido a [Github](https://github.com/) no hay ningún backend que pueda actuar como fuente para generar el XML del feed. Por lo cual el script que armé realiza un pequeño scrapping del HTML de mis páginas web (mediante la excelente biblioteca [node-html-parser](https://github.com/taoqf/node-html-parser) y a partir de la información recolectada genero el XML con la ayuda de [node-rss](https://github.com/dylang/node-rss).

*[XML]: eXtensible Markup Language
*[HTML]: HyperText Markup Language

El código fuente de la herramienta pueden encontrarlo [aquí](https://github.com/iyaki/iyaki.github.io/tree/main/rss).

Todo esto es ejecutado mediante [Github Actions](https://github.com/features/actions) cada vez que el contenido de alguna de las páginas es modificado.  
Pueden encontrar la configuración de cada workflow de Girhub Actions en los siguientes enlaces:

- [Workflow RSS del recopilador de contenido](https://github.com/iyaki/iyaki.github.io/blob/main/.github/workflows/rss_curated.yml)
- [Workflow RSS del blog](https://github.com/iyaki/iyaki.github.io/blob/main/.github/workflows/rss_blog.yml)

Volviendo a revisar un poco cómo quedó resuelta la generación de RSS y viendo lo genérica que resultó la solución, creo que podría convertir la herramienta en una Action y publicarla en el [marketplace de Github](https://github.com/marketplace). Con una [breve búsqueda](https://github.com/marketplace?type=actions&query=rss+) lo único parecido que encontré fue [esto](https://github.com/marketplace/actions/rssify-any).

Hasta aquí el post de hoy estimados, espero que tengan un magnífico día.
