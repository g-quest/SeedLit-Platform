FROM node:20 AS base
LABEL project=seedlit
RUN mkdir /usr/src/app && chown node:node /usr/src/app
USER node
WORKDIR /usr/src/app
COPY --chown=node:node package.json ./
RUN npm install

FROM node:20 AS build
LABEL project=seedlit
ARG API
ARG NEXT_PUBLIC_API
ARG CONTENTFUL_SPACE
ARG CONTENTFUL_ENVIRONMENT
ARG CONTENTFUL_ACCESS_TOKEN
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY

USER node
WORKDIR /usr/src/app
COPY --from=base --chown=root:root /usr/src/app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS local
LABEL project=seedlit
USER node
WORKDIR /usr/src/app
COPY --from=base --chown=root:root /usr/src/app/node_modules ./node_modules
COPY . .
CMD ["npm", "run", "dev"]

FROM node:20-alpine AS production
LABEL project=seedlit
USER node
WORKDIR /usr/src/app
COPY --from=build --chown=node:node /usr/src/app/.next ./.next
COPY --from=build --chown=root:root /usr/src/app/public ./public
COPY --from=build --chown=root:root /usr/src/app/node_modules ./node_modules
COPY --from=build --chown=root:root /usr/src/app/package.json ./package.json
CMD ["npm", "start"]
