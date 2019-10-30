FROM node:8
RUN mkdir /src
WORKDIR /src
ADD package.json /src/package.json
COPY server.js /src/server.js
RUN npm install
EXPOSE 4000
CMD node server.js