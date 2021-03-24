FROM node:14.16.0 
RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm run build

COPY . /app
