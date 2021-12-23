FROM node:17.2.0-alpine3.14 AS build

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy all local files into the image.
COPY . .

ARG API_BASE
ENV VITE_API_BASE $API_BASE

RUN npm run build


FROM node:17.2.0-alpine3.14

WORKDIR /app
COPY --from=build /app .
COPY . .

EXPOSE 3000
CMD ["node", "./build"]