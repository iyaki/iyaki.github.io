# Depurando conocimiento

En esta ocasión les traigo un relato sobre cómo experimenté una sobrecarga de
información por seguir demasiados feeds RSS, llegando a un punto donde la
mayoría de los artículos ya no me interesaban para nada y de como lo resolví
con un poco de Javascript cuando podría, simplemente, haber dejado de seguir
dichos feeds (cosa que dicho sea de paso en realidad sí termine haciendo en
algunos casos).

*[RSS]: Really Simple Syndication.

Podría haber dejado de seguirlos, pero… ¿Y si justo entonces decidiesen publicar
algo de mi interés? Pues sí, puede pasar; pero ¿realmente va a tener eso un
impacto en tu vida? Probablemente no.

Por supuesto, lo mejor, en realidad, sería superar ese miedo ridículo a
“perderse algo” y poder tener una [dieta baja en información](https://manhattanmentalhealthcounseling.com/the-benefits-of-a-low-information-diet-for-people-with-mental-health-issues/)
y prácticamente nula en datos, a menos que alguna de nuestras actividades
lo requiera.

Y ¿Por qué podemos querer información que no necesitamos ahora? La única
respuesta legitima que se me ocurre es para poder responder más rápidamente ante
alguna necesidad relacionada. Sin embargo, ese argumento se derrumba enseguida
si uno sabe realizar búsquedas en internet con, por lo menos, un mínimo de
eficacia. ¿Cuánto tardamos hoy en día en acceder a la información que queramos
en el momento que la necesitamos con todas las herramientas tecnológicas con las
que contamos (las cuales por cierto son cada vez más, ya que a los históricos
buscadores web como [Google](https://www.google.com/) ahora se suman nuevas
herramientas impulsadas por inteligencia artificial como [ChatGPT](https://chatgpt.com/))?

Aunque apenas voy escribiendo 4 párrafos de este artículo, hacerlo me está
costando más de lo que esperaba y el proceso me está tomando varios días. Días
en los cuales me estoy suscribiendo de cada vez más feeds al darme cuenta de,
realmente, no necesito la información que me brindan.

Por un lado, mantenerme al tanto de la actualidad nunca me resultó una
prioridad, y si realmente ocurre un hecho que sacude al mundo, de todas formas
uno se entera enseguida al hablar con otras personas.
Mi mayor interés con los feeds siempre fue adquirir conocimiento y hasta hace
dos días estaba perfectamente preparado para justificar eso en este post. Pero
cuanto más lo pienso, más se arraigan dentro de mí varios conceptos que leí
recientemente sobre cultivar la [**ignorancia selectiva**](https://nesslabs.com/selective-ignorance).

Este ejercicio me está resultando de lo más enriquecedor, así que voy a
proponerles que lo prueben.  
Los pasos son los siguientes:

1. Infórmense brevemente sobre la ignorancia selectiva, personalmente recomiendo
  leer el capítulo 6, *The Low-Information Diet*, del libro
  *[The 4-Hour Workweek ](https://www.goodreads.com/es/book/show/368593.The_4_Hour_Workweek)*
  de Tim Ferriss.
2. Hagan un repaso mental de todas las fuentes de información que utilizan día
  a día. Desde diarios en papel hasta redes sociales, pasando por diarios
  digitales y RSS. Todos cuentan.
3. Ahora calculen cuanto tiempo le están dedicando a consumir toda esa
  información y compárenlo con cuanto tiempo están dedicando a emplear esa
  información.

Eso es todo, luego de la comparación cada uno debería saber si quiere seguir
distribuyendo su tiempo de la misma manera que lo estaba haciendo.

Al menos para mí, deshacerme de toda esa información me genera una inexplicable
incomodidad en todo mi ser. Por suerte, no es necesario llegar al extremo de
eliminar por completo la “ingesta” de información y existen puntos intermedios
como el uso de curadores de contenido. Lo más importante en estos casos es tener
el cuidado de no terminar cayendo en sesgos cognitivos como el
[filtro de burbuja, la cámara de eco o el sesgo de confirmación](https://elvisitantedigital.com/camaras-de-eco-filtros-burbuja-sesgo-de-confirmacion/).  
En cuanto a curadores de contenido, llegado este punto, me veo contractualmente
obligado conmigo mismo a comentarles que si les interesa la programación o el
management puede interesarles mi [Recopilador de contenido curado](/curated.html).

## Sobre filtrar noticias con Javascript y otras yerbas

Sí, originalmente este artículo era sobre un pequeño proyecto que desarrollé en
Javascript para filtrar noticias en [Feedly](https://feedly.com/).

Al menos para mí, con el pasar de los párrafos esto ya pasó a un segundo plano,
pero si aún les interesa el proyecto (el cual, de hecho, sigo utilizando para
filtrar los feeds a lo que quedé suscripto) pueden encontrar el mismo en su
repositorio de [Github](https://github.com/): [Feddly Denoiser](https://github.com/iyaki/feedly-denoiser).

Su funcionamiento es muy simple y se encuentra explicado en el README del
repositorio, pero si tienen dudas, consultas o sugerencias de mejora no duden en
contactarme mediante un [Issue en Github](https://github.com/iyaki/feedly-denoiser/issues)
o directamente, [vía e-mail](mailto:me@iyaki.ar).

Si, como yo, utilizan Feedly en sus dispositivos móviles, también podría
resultarles interesantes una automatización que desarrollé para ejecutar
[Feedly Denoiser](https://github.com/iyaki/feedly-denoiser) en
[Github Actions](https://github.com/features/actions) pueden encontrar [aquí](https://github.com/iyaki/feedly-denoiser-automation).

## Terminando

Estimados, esto fue todo por hoy. En breve seguramente esté actualizando la
lista de feeds RSS de mí [post anterior](/posts/20230514_reuniendo_conocimiento.html).

Y si todo sigue según el plan muy pronto, tanto [este blog](/blog.html), como el
[recopilador de contenidos curados](/curated.html), deberían contar con sus
propios feeds RSS para que puedan seguir.

Si quieren hacerme algún comentario, hablar, o sienten la irrefrenable necesidad
de discutir acaloradamente mis opiniones, siéntanse libres de escribirme a: me@iyaki.ar.

## Actualizaciones

Desde Octubre del 2023 Feedly requiere de una suscripción de pago para poder
utilizar su API REST por lo que no continuaré utilizando ni dando mantenimiento
a [Feedly Denoiser](https://github.com/iyaki/feedly-denoiser).

*[API]: Application Programming Interface
*[REST]: Representational State Transfer
