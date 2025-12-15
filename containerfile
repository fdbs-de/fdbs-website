# Build Stage
FROM node:24.4-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production Stage
FROM node:24.4-alpine AS production-stage

WORKDIR /app

COPY --from=build-stage /app/.output ./.output
COPY --from=build-stage /app/node_modules ./node_modules
COPY --from=build-stage /app/package*.json ./

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]