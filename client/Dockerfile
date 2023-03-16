
# stage1 as builder
FROM node:latest as builder
LABEL version="1.0"
LABEL description="This is the base docker image for react/vite app."
LABEL maintainer = ["sergeihar82@gmail.com", "sergeihar82@gmail.com"]
# copy the package.json to install dependencies
COPY package*.json ./
# Install the dependencies and make the folder
RUN yarn install && mkdir /react-ui && mv ./node_modules ./react-ui
WORKDIR /react-ui
COPY . .
# Build the project and copy the files
RUN yarn build

FROM nginx:alpine
#!/bin/sh
# COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy from the stahg 1
COPY --from=builder /react-ui/dist /usr/share/nginx/html
EXPOSE 3000 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]