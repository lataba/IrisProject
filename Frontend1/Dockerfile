FROM node:20.8.1

WORKDIR /app

# COPY ./build /app

COPY ./package.json /app

RUN npm install ci

RUN npm install daisyui tailwindcss

EXPOSE 3000