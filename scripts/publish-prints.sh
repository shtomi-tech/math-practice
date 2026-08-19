#!/usr/bin/env bash
set -euo pipefail

name="${1:?usage: bash scripts/publish-prints.sh <directory-name>}"
source_dir="prints/$name"
dest_dir="static/prints/$name"

mkdir -p "$dest_dir"
find "$dest_dir" -maxdepth 1 -type f -name '*.pdf' -delete
shopt -s nullglob
pdfs=("$source_dir"/*.pdf)
if ((${#pdfs[@]} == 0)); then
  echo "No PDF files found: $source_dir" >&2
  exit 1
fi
cp "${pdfs[@]}" "$dest_dir/"
