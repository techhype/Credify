FROM node:14.16.0 
RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

# RUN npm run build