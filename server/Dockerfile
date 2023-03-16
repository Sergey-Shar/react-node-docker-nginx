
FROM node:15-alpine3.10
ENV NODE_ENV production
LABEL version="1.0"
LABEL description="This is the base docker image for node.js + express app."
LABEL maintainer = ["sergeihar82@gmail.com", "sergeihar82@gmail.com"]

FROM node:16-alpine

WORKDIR /app/server

COPY package.json .

RUN npm install

COPY ./ /app/server/

EXPOSE 4000

CMD [ "npm", "start" ]
