# ./Dockerfile
FROM node:20-alpine3.19

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

ENV PORT=3030

EXPOSE 3030

RUN npm run build

CMD [ "npm", "run", "start" ]



# https://velog.io/@rungoat/CICD-Jenkins%EC%99%80-GitHub-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0
# https://velog.io/@rungoat/CICD-Jenkins-Pipeline-%EC%9C%BC%EB%A1%9C-Docker%EC%97%90-Next.js-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%9D%84%EC%9A%B0%EA%B8%B0
# https://velog.io/@cjh8746/%EC%A0%A0%ED%82%A8%EC%8A%A4-%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8-%EC%83%9D%EC%84%B1-CI-%EC%9E%91%EC%97%85