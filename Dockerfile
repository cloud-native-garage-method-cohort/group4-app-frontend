FROM quay.io/upslopeio/node-alpine

COPY --chown=node:node . .
USER node

WORKDIR /usr/src/app

COPY . ./

# building the app
RUN npm i
RUN npm run build



# Running the app
CMD [ "npm", "start" ]