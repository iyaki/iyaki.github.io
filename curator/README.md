# Curator

Utilidad para publicar en la web las adiciones a mi
[base de conocimiento](https://iyaki.notion.site/066daa9a7abb4c029724323209c85ca6?v=f16c7868e62b44bc8d974d6bc2cc8594&pvs=4), agregando comentarios generado con
ChatGPT.

Se ejecuta automáticamente mediante [un workflow](../.github/workflows/content_curator.yml)
de Github Actions.

## Configuración

Para utilizarse esta utilidad deben configurarse las variables de entorno
`NOTION_TOKEN` y `OPENAI_API_KEY` con un token de integración de Notion que
tenga acceso ala BD de la base de conocimiento y una key de OpenAI; respectivamente.
La utilidad acepta el uso de un archivo `.env` para configurar estas variables
de entorno.

## Uso

```shell
./curate.sh
```
