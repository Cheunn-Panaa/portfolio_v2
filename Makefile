APP_NAME=strapi
SERVICE?=strapi
CMD?=/bin/bash

ifndef TAG
TAG:= 0.0.1
endif

ifndef ENV
ENV := dev
endif

ifeq ($(filter $(ENV),test dev stag prod),)
$(error The ENV variable is invalid.)
endif

ifeq (,$(filter $(ENV),test dev))
COMPOSE_FILE_PATH := -f docker-compose.yml
endif


THIS_FILE := $(lastword $(MAKEFILE_LIST))
.PHONY: help build start stop construct
.DEFAULT_GOAL := help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)


build: ## Building the app
	$(info Make: Building "$(ENV)" environment images.)
	@docker-compose up --build

start:
	@docker-compose exec ${SERVICE} ${CMD} -c 'yarn develop --watch-admin'

stop: ## Shuts down the container
	@docker-compose down

clean: ## Cleans volumes from docker
	@docker system prune --volumes --force
# construct
construct: ## Generating assets and node_modules
	@docker-compose exec ${SERVICE} ${CMD} -c 'yarn install && yarn build'

