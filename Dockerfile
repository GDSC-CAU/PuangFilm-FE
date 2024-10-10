# ./Dockerfile
FROM node:20-alpine3.19

WORKDIR /app

COPY . .

RUN npm ci

ENV PORT=3030

EXPOSE 3030

RUN npm run build

CMD [ "npm", "run", "start" ]