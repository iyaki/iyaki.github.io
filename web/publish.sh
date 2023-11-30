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
	ln -s curated/rss.xml curated-rss.xml
	# ln -s curated/feed.xml curated-rss.xml

	cd ./posts/
	ln -s feed.xml rss.xml

	# Se copian los archivos html "compilados" al directorio de publicación
	cp -r "${COMPILATION_DIR}/"* "${PUBLICATION_DIR}"


	cd "$ORIGINAL_DIR" || exit
}

_publish
