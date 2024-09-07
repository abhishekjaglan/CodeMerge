FROM node:16-alpine

WORKDIR /app

COPY package* .

RUN npm install
RUN npm install -g typescript

COPY . .
RUN tsc -b

EXPOSE 3000

CMD [ "npm","start" ]