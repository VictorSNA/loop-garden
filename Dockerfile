FROM node:latest

ARG uid
ARG app_path

WORKDIR $app_path

RUN groupmod -g 1001 node && \
    usermod -u 1001 -g 1001 node

RUN apt-get update && \
    npm update npm && \
    npm install --global expo-cli && \
    apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev \
    libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb && \
    useradd -u $uid --home-dir $app_path loop-garden


COPY package.json $app_path

RUN npm install --legacy-peer-dep

USER loop-garden

COPY . $app_path
