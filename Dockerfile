FROM node:14.16.0 

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install --only=prod

COPY . /app

# RUN npm run build

CMD ["npm","start"]
