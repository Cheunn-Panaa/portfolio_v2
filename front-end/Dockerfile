FROM node:12-alpine as base

WORKDIR /var/build

#---------- PRE-REQS ----------
FROM base as prereq

COPY package*.json ./
COPY package*.json ts*.json ./

RUN npm install --quiet --unsafe-perm --no-progress --no-audit

#---------- DEVELOPMENT ----------
FROM prereq as development

RUN npm install --quiet --unsafe-perm --no-progress --no-audit --only=development

## All files will be volume mounted into the container
EXPOSE 3000

