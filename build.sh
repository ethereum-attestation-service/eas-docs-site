#!/bin/bash

yarn build
rsync -avz --delete build/ root@easscan.com:/sites/eas-docs-site
