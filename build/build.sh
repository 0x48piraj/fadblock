#!/bin/sh

DOC_FILES="../README.md"
IMG_FILES="../src/chrome/assets/logo.png"

# Strip subdirectories for manifest
sed 's/src\/.*\///g' ../manifest.json > temp-chrome-manifest.json

# Fix update url for Chrome manifest
sed -i 's/updates\.xml/src\/updates\/updates.xml/g' temp-chrome-manifest.json

# Strip subdirectories for background.js
sed 's/src\/.*\///g' ../src/js/background.js > temp-background.js

JS_FILES="temp-background.js"
GEN_FILES="$JS_FILES $DOC_FILES $IMG_FILES"
CH_FILES="$GEN_FILES temp-chrome-manifest.json ../src/updates/updates.xml"
FF_FILES="$GEN_FILES temp-ff-manifest.json ../src/updates/updates.json ../src/chrome/assets/logo.png"

NAME="output/fadblock"

# Remove existing files
rm -f $NAME.crx $NAME.xpi

# Generate Chrome .crx extension package
7z a -tzip -mx9 $NAME.crx $CH_FILES
7z rn $NAME.crx temp-chrome-manifest.json manifest.json temp-background.js background.js

# Remove temp files
echo "\nDeleting temp files..."
rm -v temp-chrome-manifest.json temp-ff-manifest.json temp-background.js