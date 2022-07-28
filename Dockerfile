#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "build"]
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/sigma-case /usr/share/nginx/html
