#!/bin/sh

# Replace the placeholder in the built static files with the environment variable
if [ -n "$VALENTINE_NAME" ]; then
  echo "Setting Valentine name to: $VALENTINE_NAME"
  sed -i "s/__VALENTINE_NAME__/$VALENTINE_NAME/g" /usr/share/nginx/html/index.html
else
  echo "No VALENTINE_NAME provided, using default."
fi

if [ -n "$VALENTINE_PET" ]; then
  echo "Setting Valentine pet theme to: $VALENTINE_PET"
  sed -i "s/__VALENTINE_PET__/$VALENTINE_PET/g" /usr/share/nginx/html/index.html
else
  echo "No VALENTINE_PET provided, using default (cat)."
fi

# Execute the default CMD
exec "$@"
