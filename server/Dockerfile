# Initial Instalation setup
FROM --platform=linux/amd64 node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .

EXPOSE 5000
CMD yarn start