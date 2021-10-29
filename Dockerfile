FROM quay.io/centos7/nodejs-12-centos7

RUN mkdir -p /home/node/app &&\
 chown -R node:node /home/node/app
WORKDIR /home/node/app

RUN chgrp -R 0 /home/node/app &&\
 chmod -R g+rwX /home/node/app

COPY package*.json /home/node/app/
USER 1000
RUN npm install

COPY --chown=node:node . /home/node/app
RUN chmod 777 /home/node/app/node_modules
EXPOSE 3000
CMD ["npm", "start"]