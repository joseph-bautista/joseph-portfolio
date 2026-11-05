# --- Build stage: compile and prerender the site ---
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Serve stage ---
FROM nginxinc/nginx-unprivileged:alpine
USER root
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf && mkdir -p /etc/nginx/snippets
USER nginx
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx nginx/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
