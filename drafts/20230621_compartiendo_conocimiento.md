# Compartiendo conocimiento

Llegamos al final de esta serie de artículos que empecé a escribir hace
aproximadamente un mes.

Fue un buen puntapié inicial (al menos para mí), ya que me ayudó ir tomando el
hábito de escribir, algo que si bien siempre me gustó, hace mucho que no hacía;
Pero, para mi gusto, un mes escribiendo sobre lo mismo (aunque hayan sido solo 4
artículos) es demasiado.

Durante todo este tiempo, describí los distintos procesos que mediante los
cuales obtengo conocimiento. Aprender cosas nuevas o desarrollar nuevas ideas
con base en nueva información está muy bien; pero, personalmente, considero que
ese ciclo de “aprendizaje” no se cierra realmente hasta que el nuevo
conocimiento es compartido.

Hay muchas razones para esto. Algunas son de los más altruistas, como desear que
la humanidad progrese mediante el libre acceso a la información, pero otras
pueden ser de lo más egoístas
([y no por eso malvadas](https://www.frontiersin.org/articles/10.3389/fpsyg.2020.01006/full))
como el hecho de que enseñar es una excelente forma de aprender o bien esperar
que alguien más pueda seguir desarrollando las ideas propias para posteriormente
retomarlas.

Para mí, hay, además, otra motivación importante. En mi trabajo suelen
consultarme sobre programación y diseño de software (sobre todo aquellos que
están dando sus primeros pasos en un empleo de informática).  
Muchas veces contestar esas consultas demanda mucho tiempo, ya que es necesario,
primero asentar ciertas bases teóricas para después poder dar una respuesta
satisfactoria que los ayude a resolver el problema que da origen a sus consultas.
Esto a veces puede resultar un poco tedioso.

Al haber aprendido la mayoría de las cosas que sé (sobre informática) de manera
autodidacta y mediante la experimentación, carecía de una herramienta que me
permitiera redirigir sus consultas a alguna otra fuente y nos ayudara a
simplificar su proceso de aprendizaje.

Esa fue mi principal razón para hacer público el acceso a mí
[base de conocimiento](https://iyaki.notion.site/066daa9a7abb4c029724323209c85ca6?v=0a0294da7e734adcb9e4e5413c1db1da&pvs=4).

Sobre cómo utilizo [Notion](https://www.notion.so/) para mantener una base de conocimiento ya les
hablé en mi post [Ordenando conocimiento](/posts/20230607_ordenando_conocimiento/),
por lo que ahora nos centraremos en su capacidad para compartir contenido.

Habilitar el acceso público a contenido en Notion es
[muy simple](https://www.notion.so/help/public-pages-and-web-publishing) y al
haber incorporado un sistema de etiquetas a los artículos que recopilo se hace
posible que cualquiera aplique filtros para poder buscar información sobre
alguna temática específica.

Además, cuenta con algunas [estadísticas](https://www.notion.so/help/page-analytics)
simples sobre los visitantes. El tracking de Notion no es para nada avanzado,
pero me permite saber que hay algunas (pocas) personas, además de mí, accediendo
a la base de conocimiento.

Este esquema funciona bastante bien para compartir información con conocidos,
pero puede no ser muy práctico para compartir información de manera masiva. Es
por eso que, hace ya algún tiempo, monté mi [Recopilador de contenidos curados](/curated.html).

En él replico los artículos que registro en Notion con un
[script en Javascript](https://github.com/iyaki/iyaki.github.io/tree/main/curator)
ejecutado de manera programada. 3 veces al día, mediante un
[workflow](https://github.com/iyaki/iyaki.github.io/blob/main/.github/workflows/content_curator.yml) de [Github Actions](https://github.com/features/actions).

No es un medio particularmente cómodo para realizar búsquedas específicas,
pero funciona muy bien para, todos los días, compartir algo de información que
me haya resultado. Y ahora que posee un feed RSS, es incluso más cómodo para
aquellos que prefieran este medio.

Hasta aquí llega el artículo de hoy. Arrivederci.

*[RSS]: Really Simple Sindication
