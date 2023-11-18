FROM node:20.8.1

WORKDIR /app/Frontend

COPY ./build /app/Frontend
COPY ./package.json /app/Frontend
COPY ./package-lock.json /app/Frontend

#COPY . /app/Frontend/

RUN npm ci --force
RUN npm install daisyui tailwindcss --force

EXPOSE 3000