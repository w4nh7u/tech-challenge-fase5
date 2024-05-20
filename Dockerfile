FROM node:12

WORKDIR /app

COPY ./package.json .

RUN npm cache clean --force
RUN npm install
RUN npm cache clean --force

COPY . .

EXPOSE 3000

# CMD npm start
CMD [ "node", "server.js" ]