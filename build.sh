#!/bin/bash

nvm use 18.12.1
yarn build
rsync -avz --delete build/ root@docs.easscan.org:/sites/eas-docs-site
