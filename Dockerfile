
FROM node:17-alpine AS deps

# WORKDIR /app
# COPY package*.json .
# ARG NODE_ENV
# ENV NODE_ENV $NODE_ENV
# RUN npm install

ENV PORT 5033

RUN mkdir -p /user/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

# copy code, install dependencies
COPY . /usr/src/app

RUN npm install && npm run build
EXPOSE 5033

CMD "npm" "run" "dev"