FROM node:lts-alpine3.15

ENV APP_ROOT /var/www/nuxt_frontend

RUN mkdir -p ${APP_ROOT}
RUN mkdir -p ${APP_ROOT}/node_modules

WORKDIR ${APP_ROOT}

COPY package.json ${APP_ROOT}
COPY *yarn.lock ${APP_ROOT}

RUN yarn install

COPY . ${APP_ROOT}

RUN yarn build

EXPOSE 3333

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3333
