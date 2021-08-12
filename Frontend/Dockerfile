# stage 1 - build
FROM node:14.15 as node
#WORKDIR /app
#COPY . .
WORKDIR /src
COPY ["Src/Frontend/Web/TIRS-Submission", "src/web/"]
WORKDIR "/src/src/web"
RUN npm ci
RUN npm run dev-build

# stage 2 - 
FROM nginx:alpine
COPY --from=node /src/src/web/dist/TIRS-Submission /usr/share/nginx/html
COPY --from=node /src/src/web/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80