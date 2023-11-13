# El desafío del lenguaje ubicuo en español

Hisashiburi dana!

Creo que nunca lo llegué a escribir esto en un post anterior, pero, cuando monté
esté blog, mi intención era escribir, por lo menos, un artículo al mes.

Como podrán notar si revisar las fechas en el índice del blog, durante
septiembre no publiqué nada.

Estoy participando en varios proyectos y se me presentaron nuevos desafíos
también en mi trabajo “formal” que me motivan mucho, pero también consumen más
tiempo de lo habitual, pero pienso que ya conseguí acomodar mi agenda para poder
seguir escribiendo (y disfrutando de hacerlo).

Sin más novedades, doy paso al tema del artículo de hoy.

:)

La programación y el idioma inglés están fuertemente relacionados. No solo la
mayoría de recursos de calidad (documentación, tutoriales y guías, por ejemplo)
suelen estar escritas en inglés, sino que los propios lenguajes de programación
y bibliotecas suelen exponerse al programador en inglés. Es cierto que existen
algunas excepciones (como [Lenguaje Latino](https://www.lenguajelatino.org/)),
pero son realmente muy pocas y su uso no se encuentra extendido ni es realmente
viable para el desarrollo de [Enterprise software](https://en.wikipedia.org/wiki/Enterprise_software).

Es por esto que muchas organizaciones optan por adoptar la política o convención
de escribir absolutamente todo el código fuente de sus software en inglés.

Esta es, en principio, una buena idea para que el código fuente sea lo más
coherente y homogéneo posible y evitar potenciales discusiones irrelevantes
entre colaboradores por detalles del empleo del lenguaje.

Sin embargo, cuando se siguen los lineamientos de Domain Driven Design para
programar, el empleo del lenguaje deja de ser una discusión irrelevante, ya que
este tipo de discusiones son las que dan lugar al descubrimiento del lenguaje
ubicuo del dominio de nuestro software.

Entonces, ¿qué hacer cuando el lenguaje ubicuo de nuestro dominio está basado en
idiomas distintos del inglés?

Yo, no lo sé.

Existen algunos casos en que, es posible adaptar o traducir todos los términos
del dominio, pero, en mi experiencia, tarde o temprano, surgen palabras que no
poseen una traducción literal o peor aún, conceptos que no existen en otros
idiomas por ser propios del modelo de negocio y país en el que se está
trabajando (hecho recurrente si el software debe cubrir regulaciones o
normativas específicas).

En estos casos, es importante buscar soluciones que permitan adaptar el lenguaje
ubicuo a la realidad del equipo de desarrollo.

Esto, en algunos casos, puede significar simplemente aceptar el “spanglish” en
nuestro código fuente.

Para equipos o proyectos pequeños puede no ser necesario definir ningún tipo de
convenciones al respecto, pero, en equipos con gran cantidad de gente
involucrada o proyectos de gran duración, puede ser deseable definir algunos
lineamientos.

En estos casos, personalmente, me inclino por aceptar el uso de términos en
inglés para toda la jerga de índole técnica o sobre la que existan convenciones
ya existentes dentro de la comunidad de programadores.

Los ejemplos más obvios podrían ser términos como:

- Interface
- Abstract
- Request
- Response
- Auth
- Factory
- Value Object
- Repository
- Exception

Pero también creo prudente incluir términos como `get` y `find` por
[existir convenciones respecto a su utilización](https://tuhrig.de/find-vs-get/).

Otro punto en el que considero relevante tener cierta flexibilidad es en la
aceptación de terminología “común” para satisfacer la [economía del lenguaje](https://es.wikipedia.org/wiki/Econom%C3%ADa_ling%C3%BC%C3%ADstica).
Porque si bien es verdad que *get* y *find* podrían traducirse como *obtener* y
*buscar*, las versiones en inglés son más cortas, un caso similar podría ser el
preferir *avg* por sobre *promedio*, y no tengo dudas de que si uno se sienta a
pensar encontrará muchos otros ejemplos similares.

El empleo del lenguaje ubicuo fuera del inglés me parece de lo más desafiante,
por desgracia no he encontrado muchos recursos o guías específicas sobre cómo
abordar esta situación ni he podido llegar a una conclusión firme sobre como
resolverlo.

De hecho, al investigar un poco el tema en internet, antes de escribir este
artículo, lo único que encontré fue [esta pregunta sin respuestas](http://www.javahispano.org/java-se/post/2468151)
realizada en el año 2015 en un foro de Java.

Si alguien conoce algún otro método para abordar estas situaciones, ha
desarrollado convenciones al respecto o tiene opiniones formadas sobre el tema,
voy a estar encantado de leerlos y poder intercambiar ideas sobre este desafío
que enfrentamos como programadores.
