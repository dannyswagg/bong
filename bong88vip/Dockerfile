FROM node:20.10.0
WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./server ./
COPY ./.env ./.env
COPY ./prisma ./
RUN yarn install
RUN yarn add sharp --ignore-engines
RUN npm install pm2 -g
RUN yarn prisma generate
CMD ["pm2-runtime", "start", "server/server.js"]