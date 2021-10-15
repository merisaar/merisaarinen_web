FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . ./

EXPOSE 8080
EXPOSE 80
EXPOSE 3000
CMD ["npm", "start"]