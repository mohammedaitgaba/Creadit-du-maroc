FROM node:17-alpine

RUN npm install -g nodemo

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","run","dev"]