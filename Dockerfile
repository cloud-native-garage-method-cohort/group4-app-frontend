FROM quay.io/upslopeio/node-alpine

WORKDIR /usr/src/app

COPY . ./

# building the app
RUN npm i
RUN npm run build



# Running the app
CMD [ "npm", "start" ]