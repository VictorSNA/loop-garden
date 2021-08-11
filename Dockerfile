FROM node:latest

ARG app_path

WORKDIR $app_path

RUN apt-get update && npm update npm && npm install --global expo-cli

COPY package.json $app_path

RUN npm install --legacy-peer-dep

COPY . $app_path
