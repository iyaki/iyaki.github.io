#!/bin/env bash

set -euo pipefail

SCRIPT_PATH="$(dirname "$(realpath "$0")")"

if [ "$#" = "0" ]
then
		printf 'post.sh - prepares posts to be published
Usage:
	post.sh path/to/post.md [path/to/other_post.md]...
'
fi

_() {
	declare -a POST_PATHS

	for arg in "$@"
	do
		POST_PATHS+=("$(realpath "$arg")")
	done

	cd "$SCRIPT_PATH" || exit

	for POST_PATH in "${POST_PATHS[@]}"
	do
		node main.js "${POST_PATH}"
	done

} && _ "$@"
unset -f _
