#!/bin/env bash

set -euo pipefail

function _publish() {
	local ORIGINAL_DIR
	ORIGINAL_DIR="$(realpath "$(pwd -P)")"
	local SCRIPT_DIR
	SCRIPT_DIR="$(dirname "$(realpath "$0")")"
	local COMPILATION_DIR="${SCRIPT_DIR}/_site"
	local PUBLICATION_DIR="${SCRIPT_DIR}/../docs"

	cd "${SCRIPT_DIR}" || exit

	rm -rf "${COMPILATION_DIR}"

	npm run build

	# Se crean symlinks para mantener retrocompatibiliad con la versión anterior
	# de la web

	cd "${COMPILATION_DIR}"
	ln -s about/index.html about.html
	ln -s blog/index.html blog.html
	ln -s curated/index.html curated.html

	cd posts
	ln -s 20230422_here_we_go/index.html 20230422_here_we_go.html
	ln -s 20230514_reuniendo_conocimiento/index.html 20230514_reuniendo_conocimiento.html
	ln -s 20230607_ordenando_conocimiento/index.html 20230607_ordenando_conocimiento.html
	ln -s 20230610_depurando_conocimiento/index.html 20230610_depurando_conocimiento.html
	ln -s 20230614_habemus_rss/index.html 20230614_habemus_rss.html
	ln -s 20230621_compartiendo_conocimiento/index.html 20230621_compartiendo_conocimiento.html
	ln -s 20230716_bibliotecas_y_librerias/index.html 20230716_bibliotecas_y_librerias.html
	ln -s 20230827_api_paginas_web/index.html 20230827_api_paginas_web.html
	ln -s 20231011_el_desafio_del_lenguaje_ubicuo_en_espanol/index.html 20231011_el_desafio_del_lenguaje_ubicuo_en_espanol.html

	# Se copian los archivos html "compilados" al directorio de publicación
	cp -r "${COMPILATION_DIR}/"* "${PUBLICATION_DIR}"

	cd "$ORIGINAL_DIR" || exit
}

_publish
