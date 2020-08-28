#!/usr/bin/env bash

git pull

npm install

npm run build

cp upload.php build/

cp -r build/** /home/wwinst/public_html/