FROM node:latest as angular
WORKDIR /app
COPY package.joson /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/ng-stocks /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t ng-stocks-build .
# docker run -p 8081:80 ng-stocks-build
