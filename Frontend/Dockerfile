FROM node:20.8.1

WORKDIR /app/Frontend

# COPY ./build /app

# COPY ./package.json /app

COPY . /app/Frontend/

RUN npm install ci

RUN npm install daisyui tailwindcss

EXPOSE 3000