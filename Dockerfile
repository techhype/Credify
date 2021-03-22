FROM node:alpine

WORKDIR '/app'

# Install and configure `serve`.
RUN npm install -g serve
CMD serve -s build
EXPOSE 5000


# Install all dependencies of the current project.
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install

COPY . .

RUN npm run build 