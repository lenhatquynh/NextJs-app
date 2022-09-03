FROM node:latest

EXPOSE 3000
WORKDIR /app

COPY ./package.json /app/
COPY ./yarn.lock /app/

RUN yarn 

COPY . /app/

ENTRYPOINT [ "yarn" ]
CMD [ "install" ]