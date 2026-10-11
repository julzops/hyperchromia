#!/bin/bash
set -euo pipefail

HYPERCHROMIA_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

{
  printf -- '---\nsidebar_position: 8\n---\n\n'
  cat "$HYPERCHROMIA_DIR/CHANGELOG.md"
} > "$HYPERCHROMIA_DIR/docs-site/docs/changelog.md"
