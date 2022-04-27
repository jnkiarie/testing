FROM node:12

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/

RUN npm i

COPY . .

RUN npm test

CMD ["node","index"]