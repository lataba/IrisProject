FROM python:3.11-alpine

RUN apk --no-cache add postgresql-client
RUN apk --no-cache add curl
# Instalar gunicorn utilizando pip
# RUN pip install gunicorn

WORKDIR /app/Backend

COPY requirements.txt ./requirements.txt
RUN pip install -r ./requirements.txt

COPY . /app/Backend/

EXPOSE 8000