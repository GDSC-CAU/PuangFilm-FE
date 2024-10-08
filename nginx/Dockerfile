# ./nginx/Dockerfile
FROM nginx:1.23.3-alpine

RUN apk --no-cache add openssl

RUN	openssl req -newkey rsa:4096 -days 365 -nodes -x509 \
    -subj "/C=KR/ST=Seoul/L=Seoul/O=42Seoul/OU=Gun/CN=localhost" \
    -keyout /etc/ssl/private/localhost.key \
    -out /etc/ssl/certs/localhost.crt && \
    chmod 600 /etc/ssl/certs/localhost.crt /etc/ssl/private/localhost.key

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443