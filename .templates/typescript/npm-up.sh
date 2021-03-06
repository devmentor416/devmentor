#!/usr/bin/env bash
# Update Script for NPM Modules.
# Run this to install the latest modules and update package.json
# package.json.t is the template file, make changes there!
cp package.json.t package.json
rm -f package-lock.json
rm -rf node_modules
npm i -S bootstrap bunyan dm-css jquery popper.js
npm i -D @types/bunyan @types/core-js @types/node ava browser-sync browserify core-js cross-env cross-var gazeall husky
npm i -D npm-run-all nyc shx tap-summary tape-run tslint typedoc typescript typescript-formatter
rm -f package-lock.json
rm -rf node_modules
