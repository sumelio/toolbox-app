FROM node:8

#Setting the working directory as /app
WORKDIR /app

#Copying package.json to Docker Image
COPY package.json /app
COPY src /app/src

#Installing all dependencies.
RUN npm install

# Running the dev server.
CMD ["npm", "start"]