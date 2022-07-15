FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN yarn install

COPY . ./
RUN yarn run build
EXPOSE 3000
# Install serve command for yarn package manager
RUN yarn global add serve

# Navigate to build folder
WORKDIR /app/dist

# Start the application
CMD serve -p 3000 -s . 
