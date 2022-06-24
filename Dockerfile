FROM node:16-alpine

WORKDIR /app

RUN npm i npm@latest -g

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]

