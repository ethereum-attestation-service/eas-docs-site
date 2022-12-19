#!/bin/bash

yarn build
rsync -avz --delete build/ root@easscan.com:/sites/eas-homesite/build
rsync -avz public/ root@easscan.com:/sites/eas-homesite/public
rsync -avz prisma/ root@easscan.com:/sites/eas-homesite/prisma
rsync -avz package.json root@easscan.com:/sites/eas-homesite/package.json
