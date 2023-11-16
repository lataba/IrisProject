FROM node:20.8.1

WORKDIR /app/Frontend

COPY ./build /app/Frontend
COPY ./package.json /app/Frontend
COPY ./package-lock.json /app/Frontend

#COPY . /app/Frontend/

RUN npm install ci
RUN npm install daisyui tailwindcss
RUN npm install @event-calendar/core
RUN npm install @event-calendar/time-grid

EXPOSE 3000