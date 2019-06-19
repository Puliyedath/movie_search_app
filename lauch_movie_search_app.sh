#!/bin/sh

echo "Launching Movie Search App........"
echo "Creating dist resources in dev mode"
`npm run build:dev`

echo "####################################"

echo "Starting web pack dev server on port 8080"
`npm start:dev:server`
echo "Launching the website on localhost:8080"
