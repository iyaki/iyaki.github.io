# Poster

Utilidad para preparar las publicaciones de mi blog a partir de documentos
markdown.

## Uso

```shell
./post.sh path/al/post1.md [path/al/post2.md]...
```

## Funcionamiento

Esta utilidad realiza una serie de acciones en base a ciertas reglas para
preparar los posts para su publicación. Estas son:

### Preparar el post markdown para su publicación

Los posts en formato markdown se preparan mediante el siguiente algoritmo.  

1. Se define si el post es nuevo o se está actualizando un post antiguo (esto se
  define verificando si el nombre archivo en markdown comienza con una fecha
  en formato `YYYMMDD`).
2. Si el post es nuevo, se define el nombre del archivo (.md) eliminando
  caracteres numéricos al comienzo del nombre (Si existieran) y agregando la
  fecha en la que se ejecuta el script con el formato: `YYYYMMDD`.
3. Se agregan [links de "uso común"](./wikilinker.js).
4. Se agregan [abreviaciones de "uso común"](./utils/markdown.js).
5. Se convierte el contenido del post en formato markdown (con las adiciones
  anteriores) a formato HTML, utilizando el [template predefinido](./templates/post.html).
6. Se crea el archivo del post en formato HTML en el directorio `/docs/posts/`.
7. Se crea el archivo del post en formato markdown en el directorio `/docs/posts/`.
8. Si el post es nuevo, se agrega las entradas correspondientes en
9. [el index de posts](../docs/posts/index.html) y [blog.html](../docs/blog.html).

### Pasos extra (realización manual)

Una vez creados y editados los archivos pertinentes de manera automática se debe
proceder a:

1. si se desea, realizar ediciones manuales sobre el documento HTML (por
  ejemplo, para adicionar atributos relevantes o etiquetas adicionales).
2. En [blog.html](../docs/blog.html) se debe agregar un epígrafe para el post.
  El script deja un placeholder de `INSERT DESCRIPTION HERE` donde debe
  agregarse el epígrafe.
3. Una vez que este todo listo, mediante git, se debe realizar commit y push de
  los archivos. Github se encargará de publicarlos de manera automática.
