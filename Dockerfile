FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN npm install

COPY . ./

EXPOSE 3000
EXPOSE 80
CMD ["npm", "run build"]