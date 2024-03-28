# No solo de software vive el hombre

Usar las herramientas adecuadas para el trabajo adecuado, saber utilizarlas y darles el mantenimiento necesario para que sigan funcionando son formas importantes de aumentar nuestra productividad. Pero existe algo con un impacto mucho más profundo y de mayor magnitud: Tomar las decisiones que más nos acercarán a nuestros resultados deseados. Porque uno puede ser extremadamente rápido para construir un auto, pero si lo que se necesitaba era un barco, de poco servirá todo el esfuerzo que se invierta.

En este aspecto hay dos puntos elementales que nos ayudarán a alcanzar el mayor impacto posible mediante nuestro trabajo.

El primero es conocer cuál es el resultado deseado, en este sentido, por lo general, cuanto más contexto e información tengamos sobre el problema que buscamos solucionar, mejor preparados estaremos para brindar una solución.

El segundo aspecto relevante es poder predecir, de la manera más acertada posible, las consecuencias de nuestras acciones. Para esto podemos optar por opciones poco ortodoxas como el tarot, la bola de cristal o la lectura de la borra del café; o centrarnos en aprovechar lo que otros han estudiado al respecto en el pasado y sus conclusiones. Conclusiones que en muchos casos se han recopilado en leyes, teorías y principios ampliamente conocidos en el ámbito de la gestión y la tecnología.

En este artículo nos centraremos en estas últimas.

Por eso hoy, les dejo un breve resumen de las que considero más útiles a la hora de avanzar sobre un proyecto como colaborador individual o como parte de su management.

## Principio de Pareto o Regla del 80/20

Durante el siglo XIX el economista italiano Vilfredo Pareto observó que *aproximadamente el 80% de los efectos proviene del 20% de las causas*.

En el contexto de proyectos de software, este principio cobra una relevancia significativa. Al aplicarlo, nos damos cuenta de que el 80% del valor agregado proviene del 20% de las características o funcionalidades implementadas.

Y entonces, ¿por qué esto es tan relevante para nosotros?

Porque nos ayuda a priorizar.

Si sabemos qué pequeña parte de nuestro trabajo es responsable de la mayoría de los resultados, podemos concentrarnos en eso primero.

Ya sea que estemos trabajando en solitario o en equipo, el Principio de Pareto nos da una hoja de ruta inteligente para maximizar nuestra eficiencia y lograr mejores resultados.

## Carga cognitiva

La carga cognitiva no es un principio como tal, pero sí un concepto que, si tenemos en cuenta, puede ayudarnos a nosotros y a nuestros compañeros a obtener mejores resultados.

La carga cognitiva *se refiere a la cantidad de esfuerzo mental requerido para realizar una tarea o procesar información*.

Imaginemos que estamos trabajando en un proyecto de software y debemos recordar todos los detalles sobre cómo funciona cada parte del código que se está escribiendo. Bueno, esa es la carga cognitiva en acción. Cuanto más complicado sea el proyecto, más trabajo mental habrá que hacer para mantener todo en orden.

A la hora de programar existen múltiples maneras de disminuir la carga cognitiva que una pieza de código fuente requiere. A mí, en particular, me agradan bastante las sugerencias de [*Object Calisthenics*](https://franiglesias.github.io/calisthenics-1/).

## Context Switching

Otro concepto que, a pesar de no tratarse de una ley o principio, puede impactar significativamente en nuestra productividad.  
Context switching *se refiere al proceso de cambiar nuestra atención y enfoque de una tarea a otra*. Este cambio constante de contexto puede ser perjudicial para nuestra productividad, ya que requerimos tiempo y energía para ajustarnos a la nueva tarea.

Y peor aún, aunque la interrupción fuese breve, volver a [“la zona”](https://www.kenneth-truyers.net/2015/10/05/programming-in-the-zone/) o [“el flujo”](https://github.blog/2024-01-22-how-to-get-in-the-flow-while-coding-and-why-its-important/) puede tomarnos [hasta 15 minutos](https://contextkeeper.io/blog/the-real-cost-of-an-interruption-and-context-switching/).

## Principio de parsimonia o Navaja de Ockham

El Principio de Parsimonia, también conocido como la Navaja de Ockham, es un principio filosófico que sugiere que, *entre varias explicaciones posibles para un fenómeno, la más simple suele ser la correcta*. Este principio, propuesto por el filósofo y teólogo Guillermo de Ockham en el siglo XIV, aboga por no multiplicar las entidades innecesariamente.

Entonces, en el mundo del desarrollo de software, esto significa que cuando nos encontramos con un problema a resolver (un bug, una nueva funcionalidad a implementar, un desafío a nivel de arquitectura, etc.), deberíamos intentar encontrar la solución más sencilla posible. En lugar de enredarnos con soluciones complejas que pueden generar más problemas, deberíamos seguir el camino más simple y directo.

Dentro del mundo de la programación, esto se encuentra también muy relacionado con los principios [YAGNI](https://enterprisecraftsmanship.com/posts/yagni-revisited/) y [KISS](https://enterprisecraftsmanship.com/posts/kiss-revisited/).

## Ley de Conway

La Ley de Conway viene a recordarnos lo importante que es la comunicación en el desarrollo de software, formulada por el programador Melvin Conway en 1968, establece que *las organizaciones que diseñan sistemas están inevitablemente limitadas a producir diseños que sean réplicas de la estructura de comunicación de sus propias organizaciones*.

He visto muchas veces artículos y explicaciones que se centran en cómo un equipo con poca organización y falta de comunicación producirá software de baja calidad y que, probablemente, no resuelva necesidades reales. Pero a mí me resulta mucho más interesante tener en cuenta esta ley a la hora de diseñar sistemas y definir su arquitectura.

El impacto de la ley de Conway en la arquitectura de software es muy significativo y es algo que he podido comprobar de primera mano. Hace algunos años y en medio del hype por los microservicios, en la empresa donde trabajaba, nos propusimos a, para sorpresa de nadie, migrar a una arquitectura de microservicios. Los beneficios de esta arquitectura son bien conocidos, y entre ellos destacan:

1. Mejor tolerancia a fallos, al facilitar desacoplar los servicios, permitiendo que una pieza de software fallé sin afectar a las demás.
2. Agnosticismo tecnológico, cada microservicio puede desarrollarse con las tecnologías que considere más apropiadas para lograr su cometido.
3. Mayor independencia a la hora de evolucionar y desplegar cada servicio al poder hacerlo de manera individual.
4. Reusabilidad entre áreas de negocio, si partes de la lógica de negocio se repiten entre distintos procesos y áreas, es posible reutilizar los servicios ya desarrollados.
5. Permite la experimentación y la evolución rápida, al poder ser desarrollados sin comprometer al resto del sistema.

Pero nunca llegamos a beneficiarnos de ellos y es que:

1. Nuestras reglas de negocio, aunque bien definidas, eran bastante complejas y la forma en que el equipo las concibe hace que estén fuertemente acopladas entre sí; por lo que, incluso desarrollando diferentes aplicativos, el nivel de dependencia entre ellos impedía una mayor resiliencia ante fallos de un componente.
2. Todo nuestro equipo “hablaba” los mismos lenguajes de programación, por lo que las posibles tecnologías a utilizar eran bastante limitadas.
3. Al haber dependencias tan fuertes entre las distintas reglas de negocio, cualquier cambio terminaba afectando múltiples componentes.
4. Nuestras reglas de negocio, aunque complejas, se mantenían dentro de un alcance bastante acotado, por lo que la reutilización de servicios era muy poco probable.
5. Al tener un equipo conformado, principalmente, por desarrolladores Junior, la experimentación resultaba casi nula.

Y, para empeorar, las cosas, los integrantes del equipo siempre había trabajado de manera muy cercana entre ellos, por lo que no existía un ownership claro sobre procesos o módulos que permitieran la independencia necesaria para desacoplar las distintas piezas de software. Resultando en que los intentos de separar servicios y comunicarlos solo generara confusión y frustración.

Este es un claro ejemplo de cómo un equipo que tenía la capacidad técnica para desarrollar microservicios falló en hacerlo por razones meramente organizativas y comunicacionales.  
Para poder implementar exitosamente una arquitectura de microservicios, primero deberíamos haber comenzado por cambiar la forma en que trabajábamos. Armar múltiples equipos con un alcance y objetivos claros, capacitar a los desarrolladores en algunas tecnologías nuevas, probablemente contratar más colaboradores, etc.

Por suerte, esta migración fue lanzada como una prueba piloto, y notamos todos estas fricciones antes de que se volvieran un problema. Así, de común acuerdo con el resto del equipo, decidimos volver al esquema monolítico con el que trabajábamos hasta entonces y centrar nuestros esfuerzos en mejorar la estructura y modularidad de nuestra aplicación, en lugar de intentar separar todo de manera artificial y forzada en distintos servicios independientes.

## Ley de Parkinson

En 1957 Cyril Northcote Parkinson enunció: *el trabajo se expande hasta llenar el tiempo disponible para que se termine*.

Al realizar la gestión de un proyecto, ya sea como colaboradores individuales, estimando tareas que deberán realizarse o realizando planificaciones de alto nivel, como Project Manager, siempre es buena idea tener en cuenta esta ley.  
Según nos advierte, aumentar “por las dudas” el tiempo que se planifica para dedicar a una cierta tarea puede no ser la mejor idea, ya que terminaremos consumiendo ese tiempo en detalles superfluos y probablemente innecesarios (este es un buen punto en el que aplicar el Principio de Pareto para decidir cuando detenerse) en lugar de aprovechar ese tiempo en adelantar otras tareas que puedan aportar un mayor valor real.

## Ley de Brooks

Fred Brooks, en su libro “The Mythical Man-Month” publicado en 1975, afirma: *añadir más efectivos a un proyecto de software en retraso, lo retrasará más*.

Esta es especialmente relevante para los roles de Management y Liderazgo en proyectos de desarrollo de software, ya que antaño era una práctica muy normal el intentar resolver los problemas de un proyecto mediante la adición de más y más colaboradores.

El problema es que, lejos de de generar resultados más velozmente, se produce el efecto contrario; donde la entrega de valor se retrasa aún más, debido a que la comunicación se complejiza de manera exponencial a medida que se agregan personas y se requiere tiempo adicional para capacitar a estas nuevas incorporaciones y transferirles todo el contexto necesario.

## Ley de Hofstadter

Esta ley describe la dificultad de estimar el tiempo que llevará completar tareas de gran complejidad acuñada por Douglas Hofstadter en su libro “Gödel, Escher, Bach: un Eterno y Grácil Bucle” afirma: *Siempre nos lleva más tiempo de lo esperado, incluso teniendo en cuenta la ley de Hofstadter*.

Sobre esta creo que no hay mucho que agregar, pero conocerla es una buena forma de recordar que la estimación de tareas siempre cuenta con su cuota de incertidumbre.

## Teoría de las ventanas rotas

Esta teoría proviene de la criminología. Introducida en un artículo de 1982 por los científicos sociales James Q. Wilson y George L. Kelling y popularizada en la década de 1990, sostiene que los signos visibles de la delincuencia, el comportamiento antisocial y los disturbios civiles crean un entorno urbano que fomenta la delincuencia y el desorden, incluidos los delitos graves; sugiriendo que los métodos policiales que se centran en atacar los delitos menores, como el vandalismo, la vagancia, el consumo de alcohol en público, el cruce incorrecto de peatones y la evasión de tarifas, ayudan a crear una atmósfera de orden y legalidad.

Esta idea es portada en 1999 al ámbito de la programación por Andy Hunt y Dave Thomas en su libro “The Pragmatic Programmer”, donde aplican el concepto de las ventanas rotas a la calidad de software.

En su libro, sugieren nunca dejas las “ventanas rotas” sin arreglar y repararlas en cuanto se las identifica. Evitando así esparcir malas prácticas al resto del código fuente.

Considero esto particularmente importante cuando un equipo cuenta con una gran cantidad de desarrolladores Junior, ya que es mediante el mismo código fuente sobre el que están trabajando que, día a día, siguen aprendiendo cómo programar. Sin embargo al ser una práctica que depende en gran medida de la cultura del equipo (y del área o la empresa donde esté trabajando ese equipo) puede ser un desafío notable implementar prácticas que fomenten la reparación constante de estas “ventanas rotas”.

## Principio de Hanlon

El Principio de Hanlon (o navaja de Hanlon) no trata de manera directa sobre productividad pero es una herramienta que puede ayudarnos a lograr mejores resultados cuando se trabaja en conjunto.

Este principio establece: *Nunca atribuyas a la maldad lo que se explica adecuadamente por la estupidez*.

Me gusta porque es simple y pragmático, y nos invita a darle a las personas el beneficio de la duda. Recordándonos que muchas veces un conflicto que estemos teniendo con otras personas puede ser producto, simplemente, de un malentendido.

## Redondeando

Esas fueron la leyes, principios y conceptos que, a mi parecer, resultan mas útiles a la hora de participar en un proyecto software.

Espero que les puedan ser de utilidad también a ustedes.

Si quieren charlar sobre este o cualquier otro tema siempre pueden contactarme via e-mail o dejar un comentario (Me olvidé de avisar eso! Ahora hay una sección de comentarios al final de los posts 😁).

До побаченія!
