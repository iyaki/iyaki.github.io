# Migrando ando

Hace varias semanas que quiero hacer algunos cambios en mi página web, quiero
experimentar con algunos conceptos interesantes que he conocido recientemente
como [IndieWeb](https://indieweb.org/) o embellecer más el diseño.

Pero cada vez que pensaba en hacerlo me desalentaba el tedioso trabajo que
significaba tener que editar cada página a mano, porque sí, hasta ahora todas
las páginas de mi sitio web estaban escritas a mano en archivos individuales sin
ningún tipo de componentes o posibilidad de reutilizar código.  
Cuando comencé con este proyecto de tener un sitio web (blog incluido) esto era
algo de lo que me enorgullecía (tal como explico en [mi página principal](/)).
Pero, si bien, en un principio la opción de “buscar y reemplazar” de mi editor
de texto era suficiente a medida que la cantidad de páginas crecía, empezó a
parecerme cada vez menos escalable.

Ciertamente con solo 14 páginas publicadas, entre índices, landings y posts, aún
era completamente manejable con “buscar y reemplazar” (y alguna eventual regex)
pero aun pudiendo estar pecando de optimización prematura decidí migrar a alguna
herramienta que me permitiera reutilizar componentes y escribir menos código
cada vez que quería publicar un post.

Y luego de investigar un poco, la herramienta que ganó mi atención (y aunque aún
es pronto para decirlo, puede que también mi corazón) fue:
[Eleventy](https://www.11ty.dev/).

Es un generador de sitios estáticos tan simple que no deja de sorprenderme todo
lo que facilita mi flujo de trabajo. Los partidarios de React dirán que hay
que aprender un nuevo lenguaje para poder utilizarlo, que JSX es mejor porque es
un lenguaje que uno ya maneja (Javascript, kinda...) y tienen razón. Hay que
aprender un lenguaje nuevo, pero no importa. La API de
[LiquidJS](https://liquidjs.com/index.html) (el motor de templates que Eleventy
[asigna por defecto a archivos .html](https://www.11ty.dev/docs/languages/html/))
es tan pequeña que se puede aprender y usar en unos pocos minutos sin ningún
problema.

Si les interesa como va quedando la migración pueden echarle un ojo al
[repositorio de esta web](https://github.com/iyaki/iyaki.github.io/) en Github.

De momento a lo que más provecho le estoy sacando es a los
[layouts](https://www.11ty.dev/docs/layouts/) e [include](https://www.11ty.dev/docs/languages/liquid/#quoted-include-paths>) (Nota: según la
[documentación de LiquidJS](https://liquidjs.com/tags/include.html) el uso de
*include* se encuentra obsoleto y debe preferirse *render*) que resuelven el
principal problema que tenía al escribir todos los archivos HTML por separado,
sin posibilidad de compartir contenido.

También las [collections](https://www.11ty.dev/docs/collections/) me están
resultando de lo más útiles y han resultado ser una excelente herramienta para
simplificar bastante la [herramienta que había desarrollado en JS para publicar mis posts](https://github.com/iyaki/iyaki.github.io/tree/main/poster).
O para mejorar el armado automático del sitemap.

Aún faltan algunos detalles por pulir como el armado de los feeds RSS a partir
de collections o resolver como adecuar mi
[Recopilador de contenido curado](https://iyaki.ar/curated/) para poder seguir
alimentándolo de manera automática a partir del contenido que cargo en
[mi Notion](https://iyaki.notion.site/iyaki/066daa9a7abb4c029724323209c85ca6?v=0a0294da7e734adcb9e4e5413c1db1da). Y tengo bastantes expectativas por
descubrir como puede ayudarme a mejorar la gestión de recursos Javascript o CSS
o explorar algunos de sus Plugins.

En cuanto tenga novedades las estaré compartiendo por este medio, mi blog.

Matane!
