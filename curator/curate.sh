#!/bin/env bash

cd "$(dirname "$(realpath "$0")")" || exit

if [ -f .env ]; then
    . .env
fi

export NOTION_TOKEN
export OPENAI_API_KEY

node main.js

cd ../web || exit
