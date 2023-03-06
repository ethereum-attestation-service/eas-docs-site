#!/bin/bash

yarn build
rsync -avz --delete build/ root@docs.easscan.org:/sites/eas-docs-site
