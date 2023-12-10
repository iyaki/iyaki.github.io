# Sobre el Governace Crew en esquemas unFIX

Este artículo fue escrito a lo largo de varios meses y mis ideas respecto a
unFIX han ido mutando durante todo este tiempo. Este post busca reflejar la
transformación que fueron sufriendo esas ideas. Si en algún punto encuentran
inconsistencias o notan que algo se vuelve confuso, por favor háganmelo saber.
Cualquier aporte es más que bienvenido y voy a estar encantado de poder dialogar
sobre este tema. Como siempre pueden contactarme a: me@iyaki.ar.

## Introducción

[UnFIX](https://unfix.com/) es un proyecto relativamente nuevo y como tal
evoluciona constantemente. Lo descubrí hace varios meses y desde entonces lo he
seguido desde cerca. Sin embargo, hasta hace poco, y sin que me percatara,
estaba ignorando uno de sus conceptos (en mi opinión) más poderosos.

El objetivo de este artículo no es brindar una introducción al modelo, sino
ahondar en algunos de sus aspectos, por lo que si no están familiarizados con
unFIX les recomiendo estos dos excelentes artículos introductorios de Javier
Garzas:

- [Innovador modelo de escalado o un refrito gourmet parte I](https://www.javiergarzas.com/2023/02/unfix-innovador-modelo-de-escalado-o-un-refrito-gourmet-parte-i.html).
- [Innovador modelo de escalado o un refrito gourmet parte II](https://www.javiergarzas.com/2023/02/unfix-2a-parte-innovador-modelo-de-escalado-o-un-refrito-gourmet-de-antiguos-patrones.html).

O bien, que vayan al [primer post del blog de unFIX](https://unfix.com/blog/the-unfix-model)
o a su [explicación “oficial”](https://unfix.com/what-is-unfix) y luego sigan
recorriendo las distintas secciones del website.

## Mi motivación

Actualmente, trabajo como director del área de Producto y Tecnología de una
empresa enfocada en proveer un SaaS dirigido a la industria de la salud. Es por
esto que siempre me encuentro buscando nuevas formas de mejorar los procesos y
la organización para ser más eficientes. Y en ese sentido, desde el comienzo,
unFIX me pareció una forma innovadora de organizar el equipo de personas que
trabaja conmigo.

Las responsabilidades de mi rol incluyen todo lo relativo al diseño, desarrollo
y mantenimiento de nuestro SaaS, así como los temas relacionados con RR.HH. del
plantel del área de Producto, evaluaciones de desempeño, coaching o
acompañamiento en el desarrollo profesional.

Cuanto más leía respecto al modelo unFIX más convencido me encontraba de que
podía aportarnos valor y ayudarnos a seguir creciendo.

Aunque algunos de sus conceptos podían aplicarse de manera aislada dentro del
área de Producto, estaba convencido de que el mayor valor que tenía para aportar
se encontraba en la implementación del modelo en toda la compañía. Pero al
intentar convertir toda la empresa al modelo unFIX siempre había un aspecto que
no podía terminar de acomodar: El management.

Este es un organigrama aproximado del esquema de trabajo que manejamos
actualmente (que probablemente sea vea similar al 90% de los organigramas de
cualquier empresa pequeña o mediana).

[Organigrama]

Lo más natural (al menos para mí), en una primera aproximación, fue pensar una
migración al modelo unFIX de la siguiente manera:

[“Organigrama”]

En esta migración, tanto los puestos C-Level, como los de dirección, pasan a
conformar el [Governance Crew](https://unfix.com/governance-crew).

Y hasta acá todo parecía funcionar. Sobre el papel, las piezas encajan. Todo
puede ser modelado según las reglas de unFIX. Pero aún sentía que había algunos
puntos que definir antes de poder implementar este nuevo esquema. Principalmente
en lo que respecta al management. Suena tentador (por lo fácil que sería)
mantener la separación de responsabilidades dentro del personal que forma el
Governance Crew igual que hasta ahora. Pero también se siente poco natural al
observar el nuevo “organigrama” y ver que no existen separaciones fuertes de
cara al resto de los Crews respecto a las responsabilidades de cada uno de los
integrantes del Governance Crew.

UnFIX propone algunos lineamientos en cuanto a como debería funcionar el
management, un resumen de estos lineamientos sería:

1. El trabajo de “gestionar gente” solo puede ser realizado por aquellos con el
   rol de [Chief](https://unfix.com/chief).
2. Solo los Chief pueden ser [People managers](https://in.indeed.com/career-advice/finding-a-job/what-does-people-manager-do)
   de otras personas.
3. Los Chief únicamente pueden reportar ante otros Chief.
4. Los Chief son, en última instancia, responsables por todo lo que ocurra en
   la [Base](https://unfix.com/base-types).
5. El rol de Chief solo existe dentro del Governance Crew.
6. El Governance Crew suele estar compuesto por múltiples Chief.
7. El Governance Crew es el encargado de asegurar la motivación del resto de
   las personas.
8. El Governance Crew es el responsable del negocio frente a los
   stakeholders externos.
9. El Governance Crew define el propósito de la [Base](https://unfix.com/base).
10. Existe un único Governance Crew por Base.

Son buenos lineamientos pero muy generales. Por lo que, me dispuse a agregar
algunas reglas más para “ordenar” un poco el equipo en nuestro caso particular.

Así comencé a pensar distintas maneras de separar las responsabilidades de los
integrantes del Governance Crew. Y llegué a múltiples opciones, algunas de
ellas fueron:

- Gobernanza por Perfil: Definir un Chief en el Governance Crew por cada área o
  función específica dentro de la organización, como por ejemplo, un Chief de
  Marketing, un Chief de Recursos Humanos, etc.
- Gobernanza por [Value Stream](https://unfix.com/value-streams): Separar las
  responsabilidades del Governance Crew según los diferentes flujos de valor de
  la organización, lo que implicaría tener un Chief encargado de cada uno de
  ellos, como por ejemplo, un Chief del proceso de producción, un Chief del
  proceso de ventas, etc.
- Gobernanza por [Investment Horizon](https://unfix.com/investment-horizons):
  Dividir las responsabilidades del Governance Crew según los diferentes
  Investment Horizon en los que se enfoca la organización.
- Gobernanza por entropía: Tirar dados para decidir como separar las
  responsabilidades de los miembros del Governance Crew. Aunque es la opción
  menos seria de todas las que pude pensar, finalmente me pareció igual de
  arbitraria que cualquiera de las anteriores.

Además, al reflexionar en como sería un día normal de trabajo con cualquiera de
estas nuevas estructuras, no puedo evitar sentir una sensación de inconformidad
al profundizar en algunos detalles.

Cuanto más intentaba encontrar una respuesta que me satisficiera, más me
alejaba de las opciones de gobernanza que había pensado, y es que en múltiples
artículos del [blog de unFIX](https://unfix.com/blog)
([Manage the System, Lead the People](https://unfix.com/blog/manage-the-system),
[How Do We Keep the Business Agile and Aligned?](https://unfix.com/blog/agile-and-aligned),
[Middle Managers Should Stop Coordinating](https://unfix.com/blog/middle-managers-should-stop-coordinating)
) y algunos [recursos externos](https://youtu.be/6IRQWT-kxXs) quedaba bastante
claro que el enfoque que estaba dando al trabajo que debía realizar el
Governance Crew era incorrecto y gran parte de las responsabilidades de
dirección que hoy cubro no tenían lugar en el Governance Crew.

## El problema

Mi trabajo ya no existía.

O mejor dicho, para seguir las directivas del modelo unFIX mi puesto de
[Middle Management](https://en.wikipedia.org/wiki/Middle_management) no debía
existir.

En una primera instancia darme cuenta de esto fue un shock importante. También
fue el punto en que dejé este artículo sin terminar durante bastante tiempo y
pensé en abandonar mi proyecto de implantación del modelo unFIX en mi trabajo.  
Pero a media que pasaron los días y las semanas, al seguir dándole vueltas al
asunto, y buscando más información sobre el tema, finalmente, todas las
piezas encajaron.

## La revelación

Aunque mi puesto no pudiese existir como lo había hecho hasta ahora, eso no
tenía por qué cambiar mi rol o responsabilidades como individuo. Y es que unFIX
contempla la posibilidad de participar en
[múltiples equipos a la vez](https://unfix.com/blog/the-multiteaming-way), así
como distintos [Participation Levels](https://unfix.com/participation-levels),
[Time commitments](https://unfix.com/blog/no-more-fixed-jobs) y la existencia de
[Facilitation crews](https://unfix.com/facilitation-crew). Mis responsabilidades
y todo lo que disfruto de mi trabajo seguían ahí, pero ya no englobadas en
un único puesto.

Esto permite tomar decisiones sobre la base y su funcionamiento, como parte de
los miembros del Governance Crew, pero también seguir participando en el
coaching de otros colaboradores como parte de un Facilitation Crew o colaborar
en distintos equipos y proyectos de manera más flexible.

La posibilidad de participar en múltiples equipos es, en mi opinión, una de las
características más interesantes y liberadoras del modelo unFIX. Y una de
las que más lo diferencia de la mayoría de los frameworks Agile que prohíben
esta práctica y buscan equipos lo más estables posible. Es cierto que esta
estabilidad tiene sus ventajas, pero dependiendo de factores como el tamaño de
la organización o la velocidad a la que cambian los objetivos puede no ser la
opción más beneficiosa.

## ¿Conclusión?

Actualmente, estamos trabajando en adaptar nuestra organización interna a un
modelo más fluido y fuertemente influenciado por las propuestas de unFIX, pero
es una labor que apenas estamos comenzando, por lo que hoy no podría brindar una
conclusión sobre las ventajas, desventajas o desafíos que esto nos presente.
Espero tener noticias al respecto pronto para poder compartirlas.
