#!/bin/env bash

set -euo pipefail

function _publish() {
	local SCRIPT_DIR
	SCRIPT_DIR="$(dirname "$(realpath "$0")")"
	local COMPILATION_DIR="${SCRIPT_DIR}/_site"
	local PUBLICATION_DIR="${SCRIPT_DIR}/../docs"

	rm -rf "${COMPILATION_DIR}"

	npm run build

	# Se copian los archivos html "compilados" al directorio de publicación
	cp -r "${COMPILATION_DIR}/"* "${PUBLICATION_DIR}"

}

_publish
